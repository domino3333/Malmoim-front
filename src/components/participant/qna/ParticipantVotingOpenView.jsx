
import { castVote } from "../../../api/qna/participantQnaApi";
import "../../../css/participant/qna/ParticipantVotingOpenView.css"
import ParticipantQuestionList from "./ParticipantQuestionList";
import { useState } from "react";
const ParticipantVotingOpenView = ({ questions, roomInfo, showRank }) => {
    const [isVoting, setIsVoting] = useState(false);


    const handleVote = async (questionNo) => {
        if (isVoting) return;
        setIsVoting(true);
        try {
            await castVote(questionNo, roomInfo.roomNo);
        } catch (e) {
            const message = e.response?.data;
            alert(e.response?.status < 500 && typeof message === "string" && message.trim()
                ? message : "투표 결과를 확인하지 못했습니다. 연결 상태를 확인한 뒤 다시 시도해주세요.");
        } finally {
            setIsVoting(false);
        }

    }

    return (<>
        <div className="ParticipantVotingOpenView-parent-panel">
            <div className="ParticipantVotingOpenView-top-panel">
                투표가 시작되었어요.
                <br />
                질문들을 읽고
                <br />
                공감하는 질문에 좋아요를 눌러주세요.
            </div>
            <div className="ParticipantVotingOpenView-bottom-panel">
                <ParticipantQuestionList
                    questions={questions}
                    canVote={true}
                    isVoting={isVoting}
                    onVote={handleVote}
                    showRank={showRank}
                />
            </div>
        </div>
    </>)
}

export default ParticipantVotingOpenView;
