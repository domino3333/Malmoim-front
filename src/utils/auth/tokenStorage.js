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

// 만료되었거나 사용할 수 없는 참여자 토큰 삭제
export const removeParticipantToken = (roomNo) => {
    sessionStorage.removeItem(`malmoim:participant-session:${roomNo}`);
};

// 호스트 토큰 저장
export const setAccessToken = (token) => {
    sessionStorage.setItem("accessToken", token);
};

// 호스트 토큰 조회
export const getAccessToken = () => {
    return sessionStorage.getItem("accessToken");
};
