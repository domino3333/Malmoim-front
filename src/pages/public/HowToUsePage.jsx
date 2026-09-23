import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import MainNavbar from '../../components/public/MainNavbar'
import createRoomImage from '../../assets/guide/create-room.png'
import homeEntryImage from '../../assets/guide/home-entry.png'
import hostDashboardImage from '../../assets/guide/host-dashboard.png'
import hostQnaImage from '../../assets/guide/host-qna.png'
import { getAccessToken } from '../../utils/auth/tokenStorage'
import '../../css/public/HowToUsePage.css'

const guides = {
  host: {
    label: '호스트',
    description: '방을 만들고, 질문과 추천 시간을 열고, 결과를 공개합니다.',
    steps: [
      {
        title: 'Q&A 방 만들기',
        description: '로그인 후 말모임 만들기에서 청중 Q&A를 선택하세요. 제목과 정원을 입력하고, 필요하면 비공개와 비밀번호를 설정할 수 있습니다.',
        image: createRoomImage,
        imageAlt: '제목, 정원, 비공개 옵션이 보이는 실제 청중 Q&A 방 생성 화면',
        caption: '실제 방 생성 화면',
      },
      {
        title: '입장 코드 전달하기',
        description: '대시보드에서 만든 방과 입장 코드를 확인하세요. 코드 옆 복사 버튼으로 참여자에게 전달할 코드를 복사할 수 있습니다.',
        image: hostDashboardImage,
        imageAlt: '최근 만든 방과 입장 코드 복사 버튼이 보이는 실제 호스트 대시보드',
        caption: '실제 호스트 대시보드',
      },
      {
        title: '질문과 추천 진행하기',
        description: '호스트 화면에서 질문 시작을 누르면 참여자가 질문을 등록할 수 있습니다. 질문 시간이 끝난 뒤 추천 시간을 열어 공감하는 질문을 고르게 하세요.',
        image: hostQnaImage,
        imageAlt: '질문 시작, 추천 시작, 결과 공개 버튼과 질문 목록이 보이는 실제 호스트 Q&A 화면',
        caption: '실제 호스트 Q&A 화면',
      },
      {
        title: '결과 공개하고 답변하기',
        description: '추천이 종료되면 결과 공개를 눌러 추천 수와 순위를 보여주세요. 질문 카드를 선택해 답변 완료 상태를 표시할 수 있습니다.',
      },
    ],
  },
  participant: {
    label: '참여자',
    description: '입장 코드로 들어와 질문을 남기고, 공감하는 질문을 추천합니다.',
    steps: [
      {
        title: '입장 코드 입력하기',
        description: '메인 화면에서 호스트가 알려준 입장 코드를 입력하세요. 비공개 방이라면 비밀번호도 입력합니다.',
        image: homeEntryImage,
        imageAlt: '입장 코드 입력칸이 보이는 실제 말모임 메인 화면',
        caption: '실제 메인 화면',
      },
      {
        title: '닉네임으로 참여하기',
        description: '입장 정보를 확인한 뒤 닉네임을 정해 방에 들어갑니다. 참여자 화면에서 현재 방의 진행 상태를 확인할 수 있습니다.',
      },
      {
        title: '질문 등록하기',
        description: '호스트가 질문 시간을 열면 등록하기 버튼으로 질문을 작성하세요. 등록된 질문은 방의 질문 목록에 나타납니다.',
      },
      {
        title: '추천하고 결과 보기',
        description: '추천 시간이 열리면 공감하는 질문에 추천을 누르세요. 호스트가 결과를 공개하면 추천 순서대로 질문을 볼 수 있습니다.',
      },
    ],
  },
}

const HowToUsePage = () => {
  const [role, setRole] = useState('host')
  const guide = guides[role]
  const hostDestination = getAccessToken() ? '/dashboard' : '/login'

  return (
    <div className="how-to-use-page">
      <MainNavbar />
      <main className="how-to-use-main">
        <header className="how-to-use-heading">
          <p className="how-to-use-eyebrow">사용 방법</p>
          <h1>말모임 사용 방법</h1>
          <p>어떤 역할로 참여하나요? 화면을 따라 순서대로 살펴보세요.</p>
        </header>

        <div className="how-to-use-roles" aria-label="역할 선택">
          <button type="button" aria-pressed={role === 'host'} onClick={() => setRole('host')}>
            호스트
          </button>
          <button type="button" aria-pressed={role === 'participant'} onClick={() => setRole('participant')}>
            참여자
          </button>
        </div>

        <section className="how-to-use-guide" aria-label={`${guide.label} 사용 방법`}>
          <div className="how-to-use-guide-intro">
            <div>
              <span className="how-to-use-eyebrow">{guide.label} 안내</span>
              <h2>{role === 'host' ? '방을 열고 Q&A를 진행하세요' : '코드 하나로 Q&A에 참여하세요'}</h2>
              <p>{guide.description}</p>
            </div>
            <span className="how-to-use-step-count">4단계</span>
          </div>

          <ol className="how-to-use-steps">
            {guide.steps.map((step, index) => (
              <li className={`how-to-use-step${step.image ? '' : ' how-to-use-step-text-only'}`} key={step.title}>
                <div className="how-to-use-step-copy">
                  <span className="how-to-use-step-number">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
                {step.image && (
                  <figure>
                    <img src={step.image} alt={step.imageAlt} loading={index === 0 ? 'eager' : 'lazy'} />
                    <figcaption>{step.caption}</figcaption>
                  </figure>
                )}
              </li>
            ))}
          </ol>
        </section>

        <section className="how-to-use-next">
          <div>
            <p className="how-to-use-eyebrow">다음 단계</p>
            <h2>{role === 'host' ? '직접 방을 만들어 보세요' : '입장 코드를 받으셨나요?'}</h2>
          </div>
          <Link to={role === 'host' ? hostDestination : '/'}>
            {role === 'host' ? '호스트로 시작' : '코드 입력하러 가기'}
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </section>
      </main>
    </div>
  )
}

export default HowToUsePage
