import MainNavBar from '../../components/public/MainNavBar'
import '../../css/public/LoginPage.css'
import { useState } from 'react'
import { login } from '../../api/auth/authApi'
import { Link, useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const [input, setInput] = useState({
    email: '',
    password: '',
  })

  const nav = useNavigate()

  const observeInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <MainNavBar />
      <div className="div-LoginPage-main">
        <div className="div-login-mainbox">
          <div className="div-login-text">
            <p className="p-login-text">로그인</p>
            <p className="p-start-text">말모임 계정으로 시작하세요</p>
          </div>
          <div className="div-login-email">
            <label htmlFor="email">이메일</label>
            <input type="email" onChange={observeInput} name="email" />
          </div>
          <div className="div-login-password">
            <label htmlFor="password">비밀번호</label>
            <input type="password" onChange={observeInput} name="password" />
          </div>
          <div className="div-login-button">
            <button
              type="button"
              onClick={async () => {
                await login(input)
                nav('/dashboard')
              }}
            >
              로그인
            </button>
          </div>
          <div className="div-login-text2">
            <p>아직 계정이 없으신가요? <Link to="/signUp">회원가입</Link></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage

