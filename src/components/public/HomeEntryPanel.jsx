
import "../../css/public/HomeEntryPanel.css"

const HomeEntryPanel =()=>{


    return(<>
    
        <div className="HomeEntryPanel-main-parent">
            <div className="HomeEntryPanel-left-pannel">
                <img src="" alt="" />
                <h2>참여자이신가요?</h2>
                <p>입장코드를 입력하고 실시간 Q&A에 참여하세요</p>
                <div className="left-panel-input-div">
                    <input type="text" name="code" className="code-input" />
                    <button className="code-input-arrow-button">→</button>
                </div>
                <div className="left-panel-advice-div">
                 입장코드는 호스트가 제공한 코드를 입력해주세요
                </div>
            </div>
            <div className="HomeEntryPanel-right-pannel">
                오

            </div>
        </div>
    </>)
}
export default HomeEntryPanel;