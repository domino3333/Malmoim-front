// 참여자 토큰 저장
export const setParticipantToken = (roomNo, token) => {
    sessionStorage.setItem(
        `malmoim:participant-session:${roomNo}`,
        token
    );
};

// 참여자 토큰 조회
export const getParticipantToken = (roomNo) => {
    return sessionStorage.getItem(
        `malmoim:participant-session:${roomNo}`
    );
};

// 호스트 토큰 저장
export const setAccessToken = (token) => {
    sessionStorage.setItem("accessToken", token);
};

// 호스트 토큰 조회
export const getAccessToken = () => {
    return sessionStorage.getItem("accessToken");
};
