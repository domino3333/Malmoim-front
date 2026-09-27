export const questionListUiByPhase = {
    READY: {
        showRank: false,
        showStatusFilter: false,
        showVoteCount: false,
        showAnswerStatus: false,
        defaultSort: "latest"
    },
    QUESTION_OPEN: {
        showRank: false,
        showStatusFilter: false,
        showVoteCount: false,
        showAnswerStatus: false,
        defaultSort: "latest"
    },
    QUESTION_CLOSED: {
        showRank: false,
        showStatusFilter: false,
        showVoteCount: false,
        showAnswerStatus: false,
        defaultSort: "latest"
    },
    VOTING_OPEN: {
        showRank: false,
        showStatusFilter: false,
        showVoteCount: false,
        showAnswerStatus: false,
        defaultSort: "latest"
    },
    VOTING_CLOSED: {
        showRank: false,
        showStatusFilter: false,
        showVoteCount: false,
        showAnswerStatus: false,
        defaultSort: "votes"
    },
    ANSWERING: {
        showRank: true,
        showStatusFilter: true,
        showVoteCount: true,
        showAnswerStatus: true,
        defaultSort: "votes"
    },
    FINISHED: {
        showRank: true,
        showStatusFilter: true,
        showVoteCount: true,
        showAnswerStatus: true,
        defaultSort: "votes"
    }
};
