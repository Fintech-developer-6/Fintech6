'use client'
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from "next/navigation";

export default function Test(props) {
  const router = useRouter();
  const [boxCount, setBoxCount] = useState(0);

  const addBox = () => {
    setBoxCount(boxCount + 1);
  };

  const boxElements = Array.from({ length: boxCount }, (_, index) => (
    <div
      key={index}
      className="box"
      style={{
        backgroundColor: index % 2 === 0 ? "#C08CD4" : "#A869C1" ,
        border: "2px solid #550077",
        width: '90%',
        height: '80px',
        borderRadius: '10px',
        marginTop: '10px',
      }}>
        <div className="boxcontent">
        <div style={{ fontSize: '15px', marginLeft: "5%", fontWeight: 'bold', color: 'white', marginTop: '1%' }}>1주년 기념 여행♥</div>
        <div style={{ fontSize: '15px', marginLeft: "5%", fontWeight: 'bold', color: 'white', marginTop: '1%' }}>23.08.17~23.08.31</div>
        <div style={{ fontSize: '10px', marginLeft: "5%",  color: 'white', marginTop: '1%' }}>목표 금액까지 00.000원!</div>
        </div>
    </div>
  ));

  return (
    <>
      <div className="container">
        <button className="backBtn" type="submit" onClick={() => router.push("/manage")}>
          <img src="../../images/back.png" />
        </button>
        <span style={{ fontSize: '15px', marginLeft: "5%", fontWeight: 'bold' }}> | 지출 관리 목표 이벤트</span>
        <div className="box-container">{boxElements}</div>
        <div className="box-container">
        <Link href="/manage/manage2/add">
            <button className="addBtn" style={{
            fontWeight: "bold",
            color: "white"
            }}>
            이벤트 추가하기
            </button>
        </Link>
            <button className="editBtn" style={{
            fontWeight: "bold",
            color: "white"
            }} onClick={() => router.push("/manage/manage2/")}>
            편집
            </button>
        </div>
        <div className="middle"></div>
        <span style={{ fontSize: '15px', marginLeft: "5%", fontWeight: 'bold', marginTop: "3%" }}> | 지출 관리 목표 이벤트</span>
        <div className="box-container">
          <div className="boxcontent">
            <div style={{ fontSize: '15px', marginLeft: "5%", fontWeight: 'bold', color: 'black', marginTop: '2%' }}>일주년 기념 여행💖</div>
            <div style={{ fontSize: '13px', marginLeft: "5%",  color: 'gray', marginTop: '0.5%' }}> 지출 관리 기간 : 23.08.17~23.08.31</div>
            <div style={{ fontSize: '13px', marginLeft: "5%",  color: 'gray', marginTop: '0.5%' }}> 필요한 금액 : 000,000원</div>
            <div style={{ fontSize: '10px', marginLeft: "5%",  color: '#A869C1', marginTop: '0.5%' }}>목표 금액까지 00.000원!</div>
          </div>
        </div>
        <div className="box-container" style={{marginTop: '10%'}}>
          <img src="../../images/heart_40.png"/>
        </div>
        <div className="bear-container">
          <img src="../../images/hungry_bear.png" style={{marginLeft: '5%'}}/>
          <div className="bearbox" style={{backgroundColor: 'white', width: '50%', marginLeft: '5%'}}>
          <div className="boxcontent" style={{textAlign: 'center'}}>
            <div style={{ fontSize: '10px', marginLeft: "5%", fontWeight: 'bold', color: 'black', marginTop: '6%' }}>현재 목표 달성 확률은 <sapn style={{color: '#A869C1'}}>70%</sapn>입니다!</div>
            <div style={{ fontSize: '10px', marginLeft: "5%", fontWeight: 'bold', color: 'black', marginTop: '2%' }}>이벤트 목표 달성을 위해 달려보아요.🏃‍♀️🏃‍♀️</div>
          </div>
          </div>
        </div>
        <span style={{ fontSize: '15px', marginLeft: "5%", fontWeight: 'bold', marginTop: "3%" }}> | 지출 관리 목표 이벤트</span>
        <span style={{ fontSize: '15px', marginLeft: "5%", fontWeight: 'bold', marginTop: "3%" }}> | 지출 관리 목표 이벤트</span>
        <span style={{ fontSize: '15px', marginLeft: "5%", fontWeight: 'bold', marginTop: "3%" }}> | 지출 관리 목표 이벤트</span>
        <span style={{ fontSize: '15px', marginLeft: "5%", fontWeight: 'bold', marginTop: "3%" }}> | 지출 관리 목표 이벤트</span>
        <span style={{ fontSize: '15px', marginLeft: "5%", fontWeight: 'bold', marginTop: "3%" }}> | 지출 관리 목표 이벤트</span>
        <span style={{ fontSize: '15px', marginLeft: "5%", fontWeight: 'bold', marginTop: "3%" }}> | 지출 관리 목표 이벤트</span>
        <span style={{ fontSize: '15px', marginLeft: "5%", fontWeight: 'bold', marginTop: "3%" }}> | 지출 관리 목표 이벤트</span>
      </div>

      <style jsx>
        {`
          .container {
            background-color: white;
            display: flex;
            flex-direction: column;
            height: 100vh;
            overflow-y: scroll;
          }

          .box-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 5px;
          }

          .box {
            width: 100%;
            border: 0.5px solid #550077;
            margin-top: 20px;
            background-color: #A869C1;
            border-radius: 10px;
            height: 80px;
          }
          
          .boxcontent {
            marginTop: 5px;
            marginLeft: 5px;
            width: 100%;
            height: 100%;
            fontSize: 10px;
            border: none;
            outline: none;
            color: #633277;
            verticalAlign: middle;
            background: transparent;
            resize: none
          }

          .backBtn {
            background-color: white;
            width: calc(50% - 200px);
            height: 5vh;
            border: none;
          }

          .addBtn {
            background-color: rgba(203, 161, 220, 0.57);
            width: 150px;
            height: 20px;
            border: 1px solid #ffffff;
            border-radius: 5px;
            margin-top: 10px;
            cursor: pointer;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
          }

          .editBtn {
            background-color: rgba(203, 161, 220, 0.57);
            width: 50px;
            height: 20px;
            border: 1px solid #ffffff;
            border-radius: 5px;
            margin-top: 10px;
            cursor: pointer;
            position: absolute;
            right: 7%;
          }

          .middle{
            background-color: #F6F6F6;
            display: flex;
            flex-direction: column;
            height: 1.5vh;
            margin-top: 40px;
          }

          .bear-container {
            display: flex;
            align-items: center;
            margin-top: 20px; /* 조정 가능 */
            margin-left: 5%; /* 조정 가능 */
          }

          .bearbox {
            width: 30%;
            border: 0.5px solid #550077;
            background-color: #A869C1;
            border-radius: 10px;
            height: 60px;
          }
        `}
      </style>
    </>
  );
}