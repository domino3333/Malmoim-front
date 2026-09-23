import { Link } from 'react-router-dom'
import { ArrowRight, MessageSquareText, ThumbsUp, UsersRound } from 'lucide-react'
import MainNavbar from '../../components/public/MainNavbar'
import hostQnaImage from '../../assets/guide/host-qna.png'
import homeEntryImage from '../../assets/guide/home-entry.png'
import hostDashboardImage from '../../assets/guide/host-dashboard.png'
import '../../css/public/ServiceIntroPage.css'

const ServiceIntroPage = () => {
  return (
    <div className="service-intro-page">
      <MainNavbar />
      <main>
        <section className="service-intro-lead">
          <div className="service-intro-container">
            <p className="service-intro-eyebrow">서비스 소개</p>
            <h1>말모임 실시간 Q&amp;A</h1>
            <p className="service-intro-summary">
              한 방에 모여 질문을 받고, 공감하는 질문을 추천하고, 결과를 함께 확인하세요.
            </p>
            <div className="service-intro-actions">
              <Link className="service-intro-primary-link" to="/how-to-use">
                사용 방법 보기 <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link className="service-intro-text-link" to="/">
                입장 코드 입력하기 <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
            <figure className="service-intro-main-figure">
              <img src={hostQnaImage} alt="질문 목록과 참여자 수, 진행 버튼이 보이는 실제 호스트 Q&A 화면" />
              <figcaption>질문부터 결과 공개까지 진행하는 호스트 화면</figcaption>
            </figure>
          </div>
        </section>

        <section className="service-intro-flow" aria-labelledby="service-intro-flow-title">
          <div className="service-intro-container">
            <div className="service-intro-section-heading">
              <p className="service-intro-eyebrow">진행 흐름</p>
              <h2 id="service-intro-flow-title">모이고, 묻고, 함께 고릅니다</h2>
            </div>
            <ol className="service-intro-flow-list">
              <li>
                <UsersRound size={22} strokeWidth={1.7} aria-hidden="true" />
                <span className="service-intro-flow-number">01</span>
                <h3>입장 코드로 모이기</h3>
                <p>호스트가 만든 방의 코드를 입력하고 닉네임으로 참여합니다.</p>
              </li>
              <li>
                <MessageSquareText size={22} strokeWidth={1.7} aria-hidden="true" />
                <span className="service-intro-flow-number">02</span>
                <h3>질문 받기</h3>
                <p>질문 시간이 열리면 참여자가 질문을 등록하고 호스트 화면에 바로 나타납니다.</p>
              </li>
              <li>
                <ThumbsUp size={22} strokeWidth={1.7} aria-hidden="true" />
                <span className="service-intro-flow-number">03</span>
                <h3>추천하고 결과 보기</h3>
                <p>공감하는 질문을 추천한 뒤, 결과 공개 단계에서 추천 순위를 확인합니다.</p>
              </li>
            </ol>
          </div>
        </section>

        <section className="service-intro-screens" aria-label="말모임 실제 화면">
          <div className="service-intro-container">
            <div className="service-intro-screen-row">
              <div className="service-intro-screen-copy">
                <span className="service-intro-index">01 / 입장</span>
                <h2>참여자는 코드로 바로 입장</h2>
                <p>메인 화면에서 입장 코드를 입력합니다. 비공개 방이라면 비밀번호를 확인하고, 닉네임을 정한 뒤 Q&amp;A에 참여합니다.</p>
              </div>
              <figure>
                <img src={homeEntryImage} alt="입장 코드 입력칸과 호스트 시작 버튼이 보이는 실제 메인 화면" loading="lazy" />
                <figcaption>실제 메인 화면</figcaption>
              </figure>
            </div>
            <div className="service-intro-screen-row">
              <div className="service-intro-screen-copy">
                <span className="service-intro-index">02 / 호스트</span>
                <h2>만든 방과 입장 코드를 한곳에서</h2>
                <p>호스트는 대시보드에서 최근 만든 방과 입장 코드를 확인하고, 코드를 복사해 참여자에게 전달할 수 있습니다.</p>
              </div>
              <figure>
                <img src={hostDashboardImage} alt="최근 만든 방과 입장 코드 복사 버튼이 보이는 실제 호스트 대시보드" loading="lazy" />
                <figcaption>실제 호스트 대시보드</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="service-intro-bottom">
          <div className="service-intro-container">
            <h2>어떤 순서로 진행되는지 궁금한가요?</h2>
            <Link to="/how-to-use">호스트·참여자 사용 방법 <ArrowRight size={18} aria-hidden="true" /></Link>
          </div>
        </section>
      </main>
    </div>
  )
}

export default ServiceIntroPage
