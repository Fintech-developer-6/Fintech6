"use client"

import useJoinContext from "@/Context/Join/store";

export default function JoinForm2() {
  const { user, setUser, formNum, setFormNum } = useJoinContext();
  const addJoinInfo2 = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      avgcostpermonth: e.target.avgcostpermonth.value,
      avgnumpermonth: e.target.avgnumpermonth.value,
    })
    console.log(user);
    setFormNum(3);
    console.log(formNum);

  };
  return (
    <>
      <div className="joinDown">
        <form className="joinForm" onSubmit={addJoinInfo2}>
          <div className="joinFormOne">
            <label className="joinLabel" htmlFor="avgcostpermonth">한달 평균 데이트 비용 </label><br />
            <input className="joinInput" type="text" id="avgcostpermonth" name="avgcostpermonth" autoComplete='off' /><span>만원</span><br />
          </div>
          <div className="joinFormOne">
            <label className="joinLabel" htmlFor="avgnumpermonth">한달 평균 데이트 회수 </label><br />
            <input className="joinInput" type="number" id="avgnumpermonth" name="avgnumpermonth" autoComplete='off' /><span>번</span><br />
          </div>
          <div className="joinBtnDiv">
            <button className="joinBtn" type="submit">다음</button>
          </div>
        </form>
      </div>

      <style jsx>{`
        .joinForm {
          background-color: white;
          margin : 30px;
          text-align: start;
        }
        
        .joinFormOne {
          border-bottom: solid 1px;
          width: 70%;
          margin-top: 20%;
          margin-bottom : 20%;
          font-weight: bolder;
        }
        
        .joinLabel {
          color: #C998DC;
          margin-bottom : 10%;
          font-size: 100%;
        }
        
        .joinInput {
          background: none;
          border: none;
          color: inherit;
          text-align: center;
          margin-top: 10%
        
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
          width: 70%;
          min-height: 35px;
          margin-top: 15px;
        }`}</style>
    </>
  )
}