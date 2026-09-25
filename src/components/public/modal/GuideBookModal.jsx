import { Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ArrowUpRight, Camera, X } from 'lucide-react'

const GuideBookModal = ({
  show,
  onHide,
  guide,
  role,
  onRoleChange,
  pageIndex,
  onPageChange,
  startDestination,
}) => {
  const step = guide.steps[pageIndex]
  const isFirstPage = pageIndex === 0
  const isLastPage = pageIndex === guide.steps.length - 1

  const handleKeyDown = (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey) return
    if (event.key === 'ArrowRight' && !isLastPage) {
      event.preventDefault()
      onPageChange(pageIndex + 1)
    }
    if (event.key === 'ArrowLeft' && !isFirstPage) {
      event.preventDefault()
      onPageChange(pageIndex - 1)
    }
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      size="xl"
      scrollable
      dialogClassName="guidebook-dialog"
      contentClassName="guidebook-content"
      aria-labelledby="guidebook-title"
      onKeyDown={handleKeyDown}
    >
      <div className="guidebook-topbar">
        <span>말모임 GUIDEBOOK <span className="guidebook-topbar-divider">/</span> {guide.label}</span>
        <button type="button" className="guidebook-close" onClick={onHide} aria-label="가이드북 닫기"><X size={21} aria-hidden="true" /></button>
      </div>

      <div className="guidebook-role-switch" aria-label="가이드 역할 바꾸기">
        <button type="button" aria-pressed={role === 'host'} onClick={() => onRoleChange('host')}>호스트 가이드</button>
        <button type="button" aria-pressed={role === 'participant'} onClick={() => onRoleChange('participant')}>참여자 가이드</button>
      </div>

      <div className="guidebook-progress"><span style={{ width: `${((pageIndex + 1) / guide.steps.length) * 100}%` }} /></div>

      <div className="guidebook-sheet" key={`${role}-${pageIndex}`}>
        <div className="guidebook-copy">
          <span className="guidebook-step-label">{guide.label.toUpperCase()} GUIDE <span>{String(pageIndex + 1).padStart(2, '0')} / {String(guide.steps.length).padStart(2, '0')}</span></span>
          <h2 id="guidebook-title">{step.title}</h2>
          <p>{step.description}</p>
          {step.note && <div className="guidebook-note">{step.note}</div>}
        </div>
        <div className="guidebook-media">
          {step.image ? (
            <figure>
              <img src={step.image} alt={step.imageAlt} />
              <figcaption>
                <span>{step.caption}</span>
                <a href={step.image} target="_blank" rel="noopener noreferrer">원본 크기로 보기 <ArrowUpRight size={14} aria-hidden="true" /></a>
              </figcaption>
            </figure>
          ) : (
            <div className="guidebook-placeholder" role="img" aria-label="화면 예시 준비 중">
              <Camera size={35} strokeWidth={1.4} aria-hidden="true" />
              <strong>화면 예시 준비 중</strong>
              <span>참여자 화면 캡처가 이 자리에 들어올 예정입니다.</span>
            </div>
          )}
        </div>
      </div>

      <div className="guidebook-footer">
        <div className="guidebook-page-dots" aria-label="가이드 페이지 선택">
          {guide.steps.map((item, index) => (
            <button
              type="button"
              key={item.title}
              className={index === pageIndex ? 'is-current' : ''}
              aria-label={`${index + 1}페이지: ${item.title}`}
              aria-current={index === pageIndex ? 'step' : undefined}
              onClick={() => onPageChange(index)}
            />
          ))}
        </div>
        <div className="guidebook-navigation">
          <button type="button" className="guidebook-prev" onClick={() => onPageChange(pageIndex - 1)} disabled={isFirstPage}><ArrowLeft size={17} aria-hidden="true" /> 이전</button>
          {isLastPage ? (
            <Link className="guidebook-next" to={startDestination} onClick={onHide}>바로 시작하기 <ArrowRight size={17} aria-hidden="true" /></Link>
          ) : (
            <button type="button" className="guidebook-next" onClick={() => onPageChange(pageIndex + 1)}>다음 장 <ArrowRight size={17} aria-hidden="true" /></button>
          )}
        </div>
      </div>
    </Modal>
  )
}

export default GuideBookModal
