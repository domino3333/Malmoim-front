import { useState } from 'react'
import MainNavbar from '../../components/public/MainNavbar'
import '../../css/public/SignUpPage.css'
import { checkDuplicate, signUp } from '../../api/auth/authApi'

const SignUpPage = () => {


  const [checkMessage, setCheckMessage] = useState("");

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

  const handleCheckDuplicate = async () => {


    try {
      const data = await checkDuplicate(input.email);
      setCheckMessage(data);

    } catch (e) {
      setCheckMessage(""); // 이전 성공 메시지가 남지 않게
      alert(`${e.response?.data}`);
    }


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
          <div className='div-signUp-check-Duplicate'>
            <button onClick={handleCheckDuplicate}>중복확인</button>

          </div>


          <div className="div-signUp-password">
            <label htmlFor="password">비밀번호</label>
            <input type="password" onChange={handleInputChange} id="password" name="password" />
          </div>
          <div className="div-signUp-password">
            <label htmlFor="password">비밀번호 확인</label>
            <input type="password" onChange={handleInputChange} id="password" name="password" />
          </div>
          <div className="div-signUp-name">
            <label htmlFor="name">이름</label>
            <input type="text" onChange={handleInputChange} id="name" name="name" />
          </div>
          <div className="div-signUp-button">
            <button type="button" onClick={async () => await signUp(input)}>가입하기</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUpPage

