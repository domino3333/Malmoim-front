import { useState } from 'react'
import MainNavbar from '../../components/public/MainNavbar'
import '../../css/public/SignUpPage.css'
import { signUp } from '../../api/auth/authApi'

const SignUpPage = () => {
  const [input, setInput] = useState({
    email: '',
    password: '',
    name: '',
  })

  // name 속성 기준 회원가입 입력값의 상태 반영
  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <MainNavbar />
      <div className="div-SignUpPage-main">
        <div className="div-signUp-mainbox">
          <div className="div-signUp-text">
            <p className="p-signUp-text">회원가입</p>
            <p className="p-start-text">말모임 계정으로 시작하세요</p>
          </div>
          <div className="div-signUp-email">
            <label htmlFor="email">이메일</label>
            <input type="email" onChange={handleInputChange} id="email" name="email" />
          </div>
          <div className="div-signUp-password">
            <label htmlFor="password">비밀번호</label>
            <input type="password" onChange={handleInputChange} id="password" name="password" />
          </div>
          <div className="div-signUp-name">
            <label htmlFor="name">이름</label>
            <input type="text" onChange={handleInputChange} id="name" name="name" />
          </div>
          <div className="div-signUp-button">
            <button type="button" onClick={() => signUp(input)}>가입하기</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUpPage

