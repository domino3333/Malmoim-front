export const questionListUiByPhase = {
    READY: {
        showRank: false,
        showStatusFilter: false,
        defaultSort: "latest"
    },
    QUESTION_OPEN: {
        showRank: false,
        showStatusFilter: false,
        defaultSort: "latest"
    },
    QUESTION_CLOSED: {
        showRank: false,
        showStatusFilter: false,
        defaultSort: "latest"
    },
    VOTING_OPEN: {
        showRank: false,
        showStatusFilter: false,
        defaultSort: "latest"
    },
    VOTING_CLOSED: {
        showRank: false,
        showStatusFilter: false,
        defaultSort: "votes"
    },
    ANSWERING: {
        showRank: true,
        showStatusFilter: true,
        defaultSort: "votes"
    },
    FINISHED: {
        showRank: true,
        showStatusFilter: true,
        defaultSort: "votes"
    }
};