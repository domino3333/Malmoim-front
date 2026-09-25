const LOCAL_DATE_TIME_PATTERN = /^(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2})(?::\d{2}(?:\.\d+)?)?$/;

// LocalDateTime은 시간대 정보가 없으므로 시각을 변환하지 않고 표시 형식만 바꾼다.
export const formatLocalDateTime = (value) => {
    if (typeof value !== "string") return "—";

    const match = value.trim().match(LOCAL_DATE_TIME_PATTERN);
    if (!match) return "—";

    const [, year, month, day, hour, minute] = match;
    return `${year.slice(-2)}.${month}.${day} ${hour}:${minute}`;
};
