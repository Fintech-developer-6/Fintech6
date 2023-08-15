'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Join1(props) {
  const router = useRouter();
  const actionJoin = async (e) => {
    e.preventDefault();
    const [member, setMember] = useState({});
    const name = e.target.name.value;
    const birthday = e.target.birthday.value;
    const phone = e.target.phone.value;
    const nickname = e.target.nickname.value;
    const password = e.target.password.value;
    console.log({ name, birthday, phone, nickname, password });
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, birthday, phone, nickname, password }),
    }
    try {
      const resp = await fetch(process.env.API_URL + 'join', options);
      if (!resp.ok) {
        throw new Error("Bad response", {
          cause : {resp}
        })
      }
      const member = await resp.json();
      alert("회원가입을 축하합니다. 나머지 정보도 입력해주세요.")
    } catch (e) {
      alert("회원가입에 실패하였습니다. 정보를 확인하세요");
      router.back();
    }
    router.push("/login/join2")
  }
  return (
    <>
      <div className="joinbody">
        <div className="jointopbar">회원가입</div>
        <div className="joinLogoImg"><img src="/join/pingHeartLogo.png" alt="#" /></div>
        {/* 바뀌는 부분만 css추가 */}
        <div className="joinUp">
          <div className="joinborderbar">
            <div className="joinProfImg"><img src="/join/profileSample.png" alt="#" /></div>
            <button className="joinCameraBtn">
              <img src="/join/cameraBtn.png" alt="" />
            </button>
          </div>
        </div>
        <div className="joinDown">
          <form className="joinForm" onSubmit={actionJoin}>
            <div className="joinFormOne">
              <label className="joinLabel" htmlFor="name">이름 </label><br />
              <input className="joinInput" type="text" id="name" name="name" autoComplete='off' /><br />
            </div>
            <div className="joinFormOne">
              <label className="joinLabel" htmlFor="birthday">생년월일 </label><br />
              <input className="joinInput" type="date" id="birthday" name="birthday" autoComplete='off' /><br />
            </div>
            <div className="joinFormOne">
              <label className="joinLabel" htmlFor="phone">전화번호 </label><br />
              <input className="joinInput" type="password" id="phone" name="phone" autoComplete='off' /><br />
            </div>
            <div className="joinFormOne">
              <label className="joinLabel" htmlFor="nickname">아이디 </label><br />
              <input className="joinInput" type="text" id="nickname" name="nickname" autoComplete='off' /><br />
            </div>
            <div className="joinFormOne">
              <label className="joinLabel" htmlFor="password">비밀번호 </label><br />
              <input className="joinInput" type="password" id="password" name="password" autoComplete='off' /><br />
            </div>
          </form>
        </div>
        <div className="joinBtnDiv">
          <button className="joinBtn" type="submit">다음</button>
          <button className="joinBtn" onClick={() => {
            router.push("/login")
          }}>취소</button>
        </div>
      </div>


      <style jsx>
        {`
        .joinbody {
          background-color: white;
          height : 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        
        .joinUp {
          background-color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .jointopbar {
          background-color: #EADEEF;
          color: white;
          width: 100%;
          height: 42px;
          display: flex;
          align-items: center;
        }
        
        .joinLogoImg {
          margin-top: 100px;
          margin-bottom: 50px;
          text-align: center;
        }
        
        .joinborderbar {
          width: 100%;
          height: 70px;
          background-color: #C998DC; 
          position: relative;
        }
        
        .joinProfImg {
          width: 82px;
          height: 82px;
          border-radius: 50%;
          position: absolute;
          top:50%;
          left:50%;
          transform: translate(-50%, -100%);
        }
        
        
        .joinCameraBtn {
          width: 40px;
          height: 30px;
          background-color: white;
          border-radius: 5px;
          margin-top: 3px;
          text-align: center;
          border-radius: 35%;
          border-color: white;
          position: absolute;
          top:50%;
          left:53%;
          transform: translate(0, -100%);
        }
        
        .joinDown {
          background-color: white;
        }
        .joinForm {
          background-color: white;
          margin : 35px;
          text-align: start;
        }
        
        .joinFormOne {
          margin-top : 20px;
          border-bottom: solid 1px;
        }
        
        .joinLabel {
        color: #C998DC;
        margin-top : 5px;
        }
        
        .joinInput {
          color: black;
          border: none;
          width: 100%;
          margin-top : 5px;
        
        }
        /* bottom 공유 */
        .joinBtnDiv {
          text-align: center;
          width: 100%;
        }
        
        .joinBtn {
          background-color: #C998DC;
          color: white;
          border-color: white;
          border-radius: 5px;
          width: 90%;
        }
      `}</style>
    </>
  )
}