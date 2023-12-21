import React,{useState,useEffect} from "react";
import axios from 'axios';
import css from './'

const UserInfo=()=>{
    const[users,setUsers]=useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')

        .then(response=>setUsers(response.data))
        .catch(error=>
            console.log('일치하는 데이터가 없습니다.',error));
    },[]);

    return(
        <>
        {users.map(user=>(
            <div key={user.id}>
                <br></br>
                <p>사용자 이름 : {user.name}</p>
                <p>아이디 : {user.username}</p>
                <p>이메일 : {user.email}</p>
                <p>주소 : {user.address.street}.{user.address.suite}.{user.address.zipcode}</p>
                <p>전화번호 : {user.phone}</p>
                <p>웹사이트 : {user.website}</p>
                <p>직장주소 : {user.company.name}{user.company.catchPhrase}</p>
                <br></br>
                <hr></hr>
            
            </div>
        ))}

        </>
    )
}

export default UserInfo;