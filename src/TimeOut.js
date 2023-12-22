//TimeOut.js
import React,{useState,useEffect} from "react";

const TimeOut = () =>{
    const [msg,setMsg]= useState();

    useEffect(()=>{
        //ms: 몇초 지연시킬래? milliseconds
        //Promise는 ms로 주어진 시간이 지난 후 실행할 코드를 작성
        //Fulfilled(이행)을 하기 위해서 resolve라는 변수명을 작성


        const delay = (ms)=>{
            //Promise는 사용할때마다 새로운 객체를 생성하기 떄문에 new를 붙여서 사용
            return new Promise(resolve=>setTimeout(resolve,ms))
        };

        //비동기 작업 진행 후 타임아웃 설정
        //async : 자바스크립트에서 비동기 작업을 다루는 데 사용되는 키워드
        //함수 앞에 async 선언하면 해당 함수는 암묵적으로 추후에 Promise를 반환할 것이라 설정
        const waitTimeout = async()=>{
            try{
                await delay(2000);//2초동안 대기!!

                setMsg('시간이 지났습니다!')

            }catch(err){
                console.error('에러발생!',err);
            }

        };
        waitTimeout();
    },[])
    return(
        <div>
            {msg ? (<p>{msg}</p>) : (<p>2초 대기하는 중</p>)}

        </div>
    )
}
export default TimeOut;