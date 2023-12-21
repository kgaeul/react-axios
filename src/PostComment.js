import React,{useEffect,useState} from "react";
import axios from "axios";

const PostComment=()=>{
    const [userData, setUserData] = useState([]);
    const [postComments,setPostComments]=useState([]);
    const [posts,setPost]=useState([]);

    //API를 두개이상 가져올 경우
    useEffect(()=>{
        axios.all([
            axios.get('https://jsonplaceholder.typicode.com/users'),
            axios.get('https://jsonplaceholder.typicode.com/comments'),
            axios.get('https://jsonplaceholder.typicode.com/posts')
        ])

        //데이터를 성공적으로 가져왔을 때
        //axios.spread 여러가지 응답을 개별 응답으로 나눠서 제공된 set 함수에 전달하는 역할
        .then(axios.spread((usersResponse,commentResponse,postResponse)=>{
            setUserData(usersResponse.data);
            setPostComments(commentResponse.data);
            setPost(postResponse.data);
        }))
        .catch(error=>console.error(error));
    },[]);

    return(
        <>
       
        <h2>유저 정보</h2>
        {userData.map(user=>(
             <div>
            <p key={user.id}>{user.name}</p>
            <hr />
            </div>
        ))}

        <h2>게시글 작성</h2>
        {postComments.map(comment=>(
            <div>
            <p key={comment.id}>{comment.body}</p>
            <hr />
            </div>
        ))}

        <h2>댓글 내용</h2>
        {posts.map(post=>(
            <div>
                <p key={post.id}>{post.title} {post.body}</p>
                <hr />
            </div>
        ))}
     </ >    
    )
}

export default PostComment;