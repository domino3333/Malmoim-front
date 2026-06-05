import MainNavBar from "../component/MainNavBar"
import logo from "../assets/logo.png"
import "./LoginPage.css"
import { useState } from "react"

const LoginPage = () => {


    const [input,setInput] = useState({
        email:"",
        password:""
    });

    
    const observeInput = (e)=>{
        setInput({...input,
            [e.target.name]:e.target.value
        })

    }







    return (<>
        <MainNavBar />
        <div className="div-LoginPage-main">
            <div className="div-login-mainbox">
                <div className="div-login-text">
                    <p className="p-login-text">로그인</p>
                    <p className="p-start-text">말모임 계정으로 시작하세요</p>
                </div>
                <div className="div-login-email">
                    <label htmlFor="email">
                        이메일
                    </label>
                    <input type="email" onChange={observeInput} id="email" name="email" />
                </div>
                <div className="div-login-password">
                    <label htmlFor="password">
                        비밀번호
                    </label>
                    <input type="password" onChange={observeInput} id="password" name="password" />
                </div>
                <div className="div-login-button">
                    <button type="button">로그인</button>
                </div>
                <div className="div-login-text2">
                    <p>아직 계정이 없으신가요? <span>회원가입</span></p>
                </div>

            </div>
        </div>
    </>)
}

export default LoginPage;