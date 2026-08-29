
export const mergeQuestionLists = (baseQuestions,latestQuestions) =>{

    const questionMap = new Map();

    baseQuestions.forEach(question => {
        questionMap.set(question.questionNo, question);
    });

    latestQuestions.forEach(question =>{
        questionMap.set(question.questionNo,question);
    });

    return Array.from(questionMap.values())
        .sort((a,b) =>
            new Date(a.createdAt).getTime()
            - new Date(b.createdAt).getTime()
        );
}
