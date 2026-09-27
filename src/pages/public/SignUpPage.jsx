import { useState } from 'react'
import MainNavbar from '../../components/public/MainNavbar'
import '../../css/public/SignUpPage.css'
import { checkEmailAvailability, signUp } from '../../api/auth/authApi'

const SignUpPage = () => {


  const [checkMessage, setCheckMessage] = useState("");
  const [emailAvailabilityCheck,setEmailAvailabilityCheck] = useState(false);

  const passwordCheckMap = {

    SUCCESS: {
      message: "비밀번호가 일치합니다",
      flag: true,
    },
    FAIL: {
      message: "비밀번호가 일치하지 않습니다.",
      flag: false,
    }
  }

  const [input, setInput] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    name: '',
  })

  // name 속성 기준 회원가입 입력값의 상태 반영
  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }

  const passwordMessage = !input.passwordCheck ? "" :
    (input.password === input.passwordCheck ? passwordCheckMap["SUCCESS"] : passwordCheckMap["FAIL"])



  const handleCheckEmailAvailability = async () => {

    if (input.email === "") {
      alert('이메일을 입력해주세요');
      return;
    }


    try {
      const data = await checkEmailAvailability(input.email);
      setCheckMessage(data);
      setEmailAvailabilityCheck(true);

    } catch (e) {
      setCheckMessage(e.response?.status === 409 ?
        e.response.data : "중복 확인 중 오류가 발생했습니다.");
    }


  }



  const handleSignUp = async () => {

    if (input.email === "") {
      alert('이메일을 입력해주세요');
      return;
    }

    if (input.password === "") {
      alert('비밀번호를 입력해주세요');
      return;
    }
    if (input.name === "") {
      alert('이름을 입력해주세요');
      return;
    }

    if(passwordMessage.flag === false){
      alert("비밀번호를 확인해주세요.");
      return;
    }

    if(emailAvailabilityCheck===false){
      alert('이메일 중복확인을 해주세요.');
      return;
    }

    await signUp(input);
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
            <button onClick={handleCheckEmailAvailability}>중복확인</button>
            {checkMessage && <p className='checkMessage'>{checkMessage}</p>}

          </div>


          <div className="div-signUp-password">
            <label htmlFor="password">비밀번호</label>
            <input type="password" onChange={handleInputChange} id="password" name="password" />
          </div>
          <div className="div-signUp-password">
            <label htmlFor="passwordCheck">비밀번호 확인</label>
            <input type="password" onChange={handleInputChange} id="passwordCheck" name="passwordCheck" />
            <p>{passwordMessage.message}</p>
          </div>
          <div className="div-signUp-name">
            <label htmlFor="name">이름</label>
            <input type="text" onChange={handleInputChange} id="name" name="name" />
          </div>
          <div className="div-signUp-button">
            <button type="button" onClick={handleSignUp}>가입하기</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUpPage

