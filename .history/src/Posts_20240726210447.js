import { useContext, useState } from "react";
import CommentForm from "./CommentForm";
import PostCard from "./PostCard";
import useFetch from "./useFetch";
import useFetchPosts from "./hooks/fetchPosts";

const postsUrl = "http://localhost:8000/posts";

const Posts = () => {
    const {loading} = useContext
    // const posts = []
    const post = [
        {
        "fullname": "usman Ashir",
        "id": "1",
        "user_id": 1,
        "username": "coinermk",
        "post": "I create PayPal accounts for people, teach how to create PayPal accounts, buy and sell PayPal funds",
        "likes": 20,
        "reposts": 100,
        "pic": "image/GQkndUQakAM7Hq6.png",
        "postPic": "image/GQkndUQakAM7Hq6.png",
        "comments": 1002,
        "views": 2000,
        "share": "",
        "liked": false,
        "reposted": false
      },
      {
        "fullname": "Umar Ashir",
        "id": "2",
        "user_id": 2,
        "username": "Farouk",
        "post": "PICK 20 BOX ONLY 3 HAS $1K",
        "likes": 200,
        "pic": "image/ebaad206539e09d8e67e20f00fda857f.jpg",
        "postPic": "image/original-0a8f09a3141b3746ac5b46ec8d82cefa (1).png",
        "reposts": 100,
        "comments": 100,
        "views": 200,
        "share": "",
        "liked": false,
        "reposted": false
      },
      {
        "fullname": "Ibrahim Ashir",
        "id": "3",
        "user_id": 3,
        "username": "Khali",
        "post": "I found out that, there is employers",
        "likes": 2,
        "reposts": 100,
        "pic": "image/logo.jpg",
        "postPic": "image/GODD9xBXUAEgJnr.jpeg",
        "comments": 102,
        "views": 20,
        "share": 10,
        "liked": false,
        "reposted": false
      },
      {
        "fullname": "Al,amin Ashir",
        "id": "4",
        "user_id": 4,
        "username": "Alameen",
        "post": "I found out that, there is a huge lack of trust between employees and potential employers.",
        "likes": 22,
        "pic": "image/GQdzEExW0AACu1o.jpeg",
        "postPic": "image/GQhcf_rbcAA7MHT.jpeg",
        "reposts": 120,
        "comments": 500,
        "views": 200,
        "share": 4,
        "liked": false,
        "reposted": false
      },
      {
        "fullname": "Shamsiyya Ashir",
        "id": "5",
        "user_id": 5,
        "username": "Shamsiyya",
        "post": "I found out that, there is a huge lack of trust between employees and potential employers.",
        "likes": 80,
        "pic": "image/logo.jpg",
        "postPic": "image/GQjc3h7XQAAN-AM.jpeg",
        "reposts": 900,
        "comments": 900,
        "views": 300,
        "share": 30,
        "liked": false,
        "reposted": false
      }];
    // const {data, loading ,error} = useFetch(postsUrl);
    const {posts, error} = useFetchPosts()
    const [visible ,setVisible] = useState("hidden");
    const [clickedPostId ,setClickedPostId] = useState(null);

    const postLink = (e,id) => {
        window.location.href = `/post/${id}`;
        console.log( 'card is clicked');
    }
    const commentClick = (postId) => {
       setVisible("visible");
       setClickedPostId(postId);
    //    console.log(postId);
    }
    return (
        <div className="posts-container">
            { loading && <div className="loading-container">loading...</div>}
           { posts && posts.map(post => (
                // insert your card
                <PostCard object = {post} postLink={postLink} commentClick ={commentClick} key={post.id}/>
            ))}
            {error && <div className="error-container">{error}</div>}.
            {/* insert commenting form  */}
            {visible === 'visible' && 
            <CommentForm showForm = {visible} hideForm = {setVisible} parentId={clickedPostId}/>
            }
        </div>
    );
}
 
export default Posts;