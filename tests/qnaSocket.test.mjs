import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import { runInNewContext } from "node:vm";

const source = await readFile(
  new URL("../src/api/qna/qnaSocket.js", import.meta.url),
  "utf8"
);

const loadSocket = () => {
  const clients = [];
  const context = {
    WEBSOCKET_URL: "ws://localhost/ws",
    console: { log() {} },
    Client: class {
      constructor(config) {
        this.config = config;
        this.reconnectDelay = config.reconnectDelay;
        this.deactivateCalls = 0;
        clients.push(this);
      }

      activate() {
        this.activated = true;
      }

      deactivate() {
        this.deactivateCalls += 1;
        return Promise.resolve();
      }
    },
  };

  const executable = source
    .replace(/^import .*\r?\n/gm, "")
    .replace("export const connectQnaSocket", "const connectQnaSocket");

  runInNewContext(
    executable + "\nglobalThis.connectQnaSocket = connectQnaSocket;",
    context
  );

  return { connectQnaSocket: context.connectQnaSocket, clients };
};

test("ROOM_FULL error stops reconnecting and notifies participant once", () => {
  const { connectQnaSocket, clients } = loadSocket();
  let fullCount = 0;
  const client = connectQnaSocket("participant-token", () => {}, () => {
    fullCount += 1;
  });

  client.onStompError({ headers: { message: "ROOM_FULL" }, body: "" });
  client.onStompError({ headers: { message: "ROOM_FULL" }, body: "" });

  assert.equal(clients.length, 1);
  assert.equal(client.activated, true);
  assert.equal(client.reconnectDelay, 0);
  assert.equal(client.deactivateCalls, 1);
  assert.equal(fullCount, 1);
});

test("other STOMP errors do not trigger room-full callback", () => {
  const { connectQnaSocket } = loadSocket();
  let fullCount = 0;
  const client = connectQnaSocket("participant-token", () => {}, () => {
    fullCount += 1;
  });

  client.onStompError({ headers: { message: "ROOM_ACCESS_DENIED" }, body: "" });

  assert.equal(fullCount, 0);
  assert.equal(client.deactivateCalls, 0);
});

test("host caller can keep using two-argument socket API", () => {
  const { connectQnaSocket } = loadSocket();
  let connected = false;
  const client = connectQnaSocket("host-token", () => {
    connected = true;
  });

  client.onConnect();

  assert.equal(connected, true);
});
