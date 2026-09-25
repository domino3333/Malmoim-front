import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, MessageSquareText, UsersRound } from 'lucide-react'
import MainNavbar from '../../components/public/MainNavbar'
import GuideBookModal from '../../components/public/modal/GuideBookModal'
import createRoomImage from '../../assets/guide/create-room-guide.png'
import homeEntryImage from '../../assets/guide/home-entry-guide.png'
import hostDashboardImage from '../../assets/guide/host-dashboard-share-guide.png'
import hostQnaImage from '../../assets/guide/host-qna-progress-guide.png'
import hostResultImage from '../../assets/guide/host-qna-results-guide.png'
import { getAccessToken } from '../../utils/auth/tokenStorage'
import '../../css/public/HowToUsePage.css'

const guides = {
  host: {
    label: '호스트',
    title: '모임을 열고, 흐름을 이끄는 사람',
    description: '방 만들기부터 질문 진행, 결과 공개까지 한 장씩 넘겨보세요.',
    preview: createRoomImage,
    previewAlt: '제목과 정원을 입력하는 Q&A 방 만들기 예시 화면',
    steps: [
      {
        title: 'Q&A 방을 만드세요',
        description: '로그인 후 말모임 만들기에서 청중 Q&A를 선택하세요. 방 제목과 정원을 정하고, 필요하다면 비공개 방과 비밀번호를 설정할 수 있습니다.',
        note: '지금 만들 수 있는 모임은 청중 Q&A입니다.',
        image: createRoomImage,
        imageAlt: '제목과 정원을 입력하는 Q&A 방 만들기 예시 화면',
        caption: '방 만들기 예시 화면',
      },
      {
        title: '입장 코드를 나누세요',
        description: '대시보드에서 만든 방과 입장 코드를 확인하세요. 복사 버튼을 눌러 참여자에게 코드를 전달하면 됩니다.',
        image: hostDashboardImage,
        imageAlt: '방 제목, 입장 코드, 복사 버튼이 보이는 호스트 대시보드 예시 화면',
        caption: '대시보드 예시 화면',
      },
      {
        title: '질문과 추천을 진행하세요',
        description: '호스트 화면에서 질문 시작을 눌러 질문 시간을 엽니다. 질문을 모은 뒤 추천 시간을 열면 참여자가 공감하는 질문을 고를 수 있습니다.',
        image: hostQnaImage,
        imageAlt: '질문 시작과 추천 시작 버튼, 답변 대기 질문 목록이 보이는 호스트 Q&A 예시 화면',
        caption: '질문 접수 예시 화면',
      },
      {
        title: '결과를 공개하고 답변하세요',
        description: '추천이 끝나면 결과 공개를 눌러 추천 수를 보여주세요. 질문을 살펴보고 답변한 질문은 답변 완료로 표시할 수 있습니다.',
        image: hostResultImage,
        imageAlt: '추천 수와 답변 상태가 표시된 질문 목록 예시 화면',
        caption: '결과 공개 예시 화면',
      },
    ],
  },
  participant: {
    label: '참여자',
    title: '코드로 들어와, 함께 이야기하는 사람',
    description: '입장부터 질문과 추천까지 참여 흐름을 살펴보세요.',
    preview: homeEntryImage,
    previewAlt: '입장 코드 입력칸이 있는 말모임 메인 화면',
    steps: [
      {
        title: '입장 코드를 입력하세요',
        description: '메인 화면에서 호스트가 알려준 입장 코드를 입력하세요. 비공개 방이라면 비밀번호를 확인하는 단계가 이어집니다.',
        image: homeEntryImage,
        imageAlt: '입장 코드 입력칸이 있는 말모임 메인 화면',
        caption: '참여자 입장 예시 화면',
      },
      {
        title: '닉네임을 정해 들어오세요',
        description: '방 정보를 확인하고 사용할 닉네임을 입력하면 모임에 참여할 수 있습니다.',
      },
      {
        title: '궁금한 점을 질문하세요',
        description: '호스트가 질문 시간을 열면 등록하기를 눌러 질문을 남기세요. 등록된 질문은 모임의 질문 목록에 나타납니다.',
      },
      {
        title: '공감하는 질문을 추천하세요',
        description: '추천 시간이 열리면 함께 듣고 싶은 질문에 좋아요를 누르세요. 결과가 공개되면 추천 수에 따른 질문 순서를 볼 수 있습니다.',
      },
    ],
  },
}

const HowToUsePage = () => {
  const [role, setRole] = useState('host')
  const [pageIndex, setPageIndex] = useState(0)
  const [isGuideOpen, setIsGuideOpen] = useState(false)
  const guide = guides[role]
  const startDestination = role === 'host' ? (getAccessToken() ? '/dashboard' : '/login') : '/'

  const selectRole = (nextRole) => {
    setRole(nextRole)
    setPageIndex(0)
  }

  const handleTabKeyDown = (event) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return
    event.preventDefault()
    const nextRole = role === 'host' ? 'participant' : 'host'
    selectRole(nextRole)
    event.currentTarget.parentElement.querySelector(`[data-role="${nextRole}"]`)?.focus()
  }

  const openGuide = () => {
    setPageIndex(0)
    setIsGuideOpen(true)
  }

  return (
    <div className="how-to-use-page">
      <MainNavbar />
      <main className="how-to-use-main">
        <header className="how-to-use-hero">
          <p className="how-to-use-kicker">MALMOIM GUIDEBOOK</p>
          <h1>말모임, <em>한 장씩 익혀보세요.</em></h1>
          <p>어떤 역할로 시작하시나요? 역할을 고르고 가이드북을 펼치면 현재 화면 위에서 가볍게 넘겨볼 수 있습니다.</p>
        </header>

        <div className="how-to-use-tabs" role="tablist" aria-label="사용 방법 역할 선택">
          <button
            type="button"
            role="tab"
            id="howto-host-tab"
            data-role="host"
            aria-selected={role === 'host'}
            aria-controls="howto-role-panel"
            tabIndex={role === 'host' ? 0 : -1}
            onClick={() => selectRole('host')}
            onKeyDown={handleTabKeyDown}
          >
            <UsersRound size={27} strokeWidth={1.7} aria-hidden="true" />
            <span><strong>호스트</strong><small>모임을 여는 사람</small></span>
            <ArrowRight className="how-to-use-tab-arrow" size={21} aria-hidden="true" />
          </button>
          <button
            type="button"
            role="tab"
            id="howto-participant-tab"
            data-role="participant"
            aria-selected={role === 'participant'}
            aria-controls="howto-role-panel"
            tabIndex={role === 'participant' ? 0 : -1}
            onClick={() => selectRole('participant')}
            onKeyDown={handleTabKeyDown}
          >
            <MessageSquareText size={27} strokeWidth={1.7} aria-hidden="true" />
            <span><strong>참여자</strong><small>모임에 함께하는 사람</small></span>
            <ArrowRight className="how-to-use-tab-arrow" size={21} aria-hidden="true" />
          </button>
        </div>

        <section className="how-to-use-selected" id="howto-role-panel" role="tabpanel" aria-labelledby={`howto-${role}-tab`}>
          <div className="how-to-use-selected-copy">
            <span className="how-to-use-selected-label"><BookOpen size={16} aria-hidden="true" /> {guide.label} 사용 방법 · {guide.steps.length}장</span>
            <h2>{guide.title}</h2>
            <p>{guide.description}</p>
            <ol className="how-to-use-contents">
              {guide.steps.map((step, index) => <li key={step.title}><span>{String(index + 1).padStart(2, '0')}</span>{step.title}</li>)}
            </ol>
            <button className="how-to-use-open" type="button" onClick={openGuide}>가이드북 펼치기 <ArrowRight size={19} aria-hidden="true" /></button>
          </div>
          <div className="how-to-use-preview">
            <div className="how-to-use-preview-top"><span>PREVIEW / {guide.label.toUpperCase()}</span><span>01—{String(guide.steps.length).padStart(2, '0')}</span></div>
            <img src={guide.preview} alt={guide.previewAlt} />
            <div className="how-to-use-preview-bottom"><span>첫 장부터 차근차근</span><BookOpen size={18} aria-hidden="true" /></div>
          </div>
        </section>

        <div className="how-to-use-footnote"><span>TIP</span> 가이드북은 좌우 화살표 키로도 넘길 수 있어요. <Link to="/intro">말모임이 궁금하다면 서비스 소개 보기 <ArrowRight size={15} aria-hidden="true" /></Link></div>
      </main>

      <GuideBookModal
        show={isGuideOpen}
        onHide={() => setIsGuideOpen(false)}
        guide={guide}
        role={role}
        onRoleChange={selectRole}
        pageIndex={pageIndex}
        onPageChange={setPageIndex}
        startDestination={startDestination}
      />
    </div>
  )
}

export default HowToUsePage
