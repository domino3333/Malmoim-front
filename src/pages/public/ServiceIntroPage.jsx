import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  Hash,
  MessageSquareText,
  MessagesSquare,
  PenLine,
  UsersRound,
} from 'lucide-react'
import MainNavbar from '../../components/public/MainNavbar'
import qnaResultImage from '../../assets/guide/host-qna-results-guide.png'
import homeEntryImage from '../../assets/guide/home-entry-guide.png'
import '../../css/public/ServiceIntroPage.css'

const meetingTypes = [
  {
    number: '01',
    icon: MessageSquareText,
    title: '질문이 모이는 Q&A',
    description: '발표를 듣는 동안 질문을 남기고, 함께 듣고 싶은 질문에 추천을 보냅니다. 호스트는 흐름에 맞춰 질문과 추천 시간을 열고 결과를 공개합니다.',
    status: '지금 이용 가능',
    available: true,
  },
  {
    number: '02',
    icon: PenLine,
    title: '그림으로 함께하는 모임',
    description: '같은 공간에서 그리고 맞히며 참여하는 그림판 모임을 준비하고 있습니다.',
    status: '준비 중',
    available: false,
  },
  {
    number: '03',
    icon: MessagesSquare,
    title: '대화가 이어지는 채팅방',
    description: '발표가 끝난 뒤에도 이야기를 나눌 수 있는 채팅방을 준비하고 있습니다.',
    status: '준비 중',
    available: false,
  },
]

const meetingFlow = [
  { number: '01', title: '방을 열고', description: '호스트가 모임에 맞는 방을 만듭니다.' },
  { number: '02', title: '코드를 나누고', description: '참여자는 입장 코드와 닉네임으로 들어옵니다.' },
  { number: '03', title: '함께 참여합니다', description: '질문하고, 공감하고, 결과를 함께 확인합니다.' },
]

const ServiceIntroPage = () => (
  <div className="service-intro-page">
    <MainNavbar />
    <main>
      <section className="intro-hero" aria-labelledby="intro-title">
        <div className="intro-container intro-hero-grid">
          <div className="intro-hero-copy">
            <span className="intro-kicker"><span aria-hidden="true" /> ONLINE GATHERING SPACE</span>
            <h1 id="intro-title">사람이 모이면,<br /><em>이야기가 시작됩니다.</em></h1>
            <p className="intro-lead">말모임은 온라인 모임과 세미나에서 모두가 가볍게 들어와 함께 참여하는 공간입니다. 지금은 실시간 Q&A로 시작하고, 앞으로 그림판 모임과 채팅방으로 만나는 방식을 넓혀갑니다.</p>
            <div className="intro-actions">
              <Link className="intro-button intro-button-primary" to="/how-to-use">사용 방법 보기 <ArrowRight size={18} aria-hidden="true" /></Link>
              <Link className="intro-button intro-button-text" to="/">입장 코드 입력하기 <ArrowUpRight size={18} aria-hidden="true" /></Link>
            </div>
            <p className="intro-hero-note">하나의 코드로 입장하는 온라인 모임</p>
          </div>
          <div className="intro-hero-art" aria-label="하나의 모임에서 질문, 그림, 대화로 이어지는 말모임의 방향">
            <div className="intro-art-orbit intro-art-orbit-one" aria-hidden="true" />
            <div className="intro-art-orbit intro-art-orbit-two" aria-hidden="true" />
            <div className="intro-art-center">
              <span className="intro-art-eyebrow">OUR SPACE</span>
              <strong>말모임</strong>
              <span>함께 머무는 온라인 모임</span>
            </div>
            <div className="intro-art-chip intro-art-chip-qna"><MessageSquareText size={20} aria-hidden="true" /><span>Q&A <small>NOW</small></span></div>
            <div className="intro-art-chip intro-art-chip-draw"><PenLine size={20} aria-hidden="true" /><span>그림판 <small>SOON</small></span></div>
            <div className="intro-art-chip intro-art-chip-chat"><MessagesSquare size={20} aria-hidden="true" /><span>채팅방 <small>SOON</small></span></div>
          </div>
        </div>
      </section>

      <section className="intro-statement" aria-labelledby="intro-statement-title">
        <div className="intro-container intro-statement-grid">
          <p className="intro-section-label">WHY MALMOIM <span>01 / 04</span></p>
          <div>
            <h2 id="intro-statement-title">보고 듣는 자리에서<br /><em>함께 만드는 자리로.</em></h2>
            <p>온라인 세미나에서는 말하고 싶은 순간이 지나가기도 합니다. 말모임은 진행자와 참여자가 같은 방에 모여 질문을 꺼내고, 관심을 나누고, 다음 대화로 이어질 수 있도록 돕습니다.</p>
          </div>
        </div>
      </section>

      <section className="intro-types" aria-labelledby="intro-types-title">
        <div className="intro-container">
          <div className="intro-section-heading">
            <div><p className="intro-section-label">WAYS TO GATHER <span>02 / 04</span></p><h2 id="intro-types-title">한 공간, 여러 가지 모임</h2></div>
            <p>모임의 목적은 달라도, 사람을 모으고 함께 참여한다는 시작은 같습니다.</p>
          </div>
          <div className="intro-type-grid">
            {meetingTypes.map(({ number, icon: Icon, title, description, status, available }) => (
              <article className={`intro-type-card${available ? ' intro-type-card-current' : ''}`} key={number}>
                <div className="intro-type-top"><span>{number}</span><span className={`intro-status${available ? ' intro-status-current' : ''}`}>{status}</span></div>
                <Icon className="intro-type-icon" size={34} strokeWidth={1.5} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="intro-flow" aria-labelledby="intro-flow-title">
        <div className="intro-container">
          <div className="intro-section-heading">
            <div><p className="intro-section-label">HOW WE MEET <span>03 / 04</span></p><h2 id="intro-flow-title">시작은 간단하게, 참여는 자연스럽게</h2></div>
            <p>복잡한 준비 없이 방을 만들고, 코드를 나누고, 같은 공간에서 참여합니다.</p>
          </div>
          <div className="intro-flow-layout">
            <ol className="intro-flow-list">
              {meetingFlow.map((step) => <li key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.description}</p></div></li>)}
            </ol>
            <figure className="intro-flow-image"><img src={homeEntryImage} alt="참여자 입장 코드 입력칸과 화살표 버튼이 보이는 말모임 예시 화면" loading="lazy" /><figcaption>참여자 입장 예시 화면</figcaption></figure>
          </div>
        </div>
      </section>

      <section className="intro-qna" aria-labelledby="intro-qna-title">
        <div className="intro-container intro-qna-grid">
          <div className="intro-qna-copy">
            <p className="intro-section-label">AVAILABLE NOW <span>04 / 04</span></p>
            <span className="intro-qna-tag"><span aria-hidden="true" /> 실시간 Q&A</span>
            <h2 id="intro-qna-title">좋은 질문이<br />다음 대화를 엽니다.</h2>
            <p>참여자는 질문을 올리고, 공감하는 질문에 추천을 보냅니다. 호스트는 질문과 추천 시간을 진행하고 결과를 공개해 중요한 질문부터 함께 살펴볼 수 있습니다.</p>
            <ul>
              <li><Hash size={18} aria-hidden="true" /> 입장 코드로 함께 모이기</li>
              <li><UsersRound size={18} aria-hidden="true" /> 질문과 추천에 실시간으로 참여하기</li>
              <li><MessageSquareText size={18} aria-hidden="true" /> 추천 결과를 보고 답변 이어가기</li>
            </ul>
            <Link className="intro-inline-link" to="/how-to-use">Q&A 사용 방법 살펴보기 <ArrowRight size={18} aria-hidden="true" /></Link>
          </div>
          <figure className="intro-qna-image"><img src={qnaResultImage} alt="질문과 추천 수가 표시된 말모임 Q&A 예시 화면" loading="lazy" /><figcaption>Q&A 예시 화면</figcaption></figure>
        </div>
      </section>

      <section className="intro-ending" aria-labelledby="intro-ending-title">
        <div className="intro-container intro-ending-grid">
          <div><p className="intro-section-label">LET'S GATHER</p><h2 id="intro-ending-title">다음 모임은<br />말모임에서 시작해보세요.</h2><p>온라인 강의, 소규모 모임, 팀 세미나까지. 참여할 자리를 열어두면 이야기는 더 멀리 갑니다.</p></div>
          <Link className="intro-ending-link" to="/how-to-use">가이드북 열기 <ArrowRight size={22} aria-hidden="true" /></Link>
        </div>
      </section>
    </main>
  </div>
)

export default ServiceIntroPage
