import React, { useState , useEffect } from 'react'
import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown'; 
import axios from "axios"
import {Link} from "react-router-dom"
import {format} from "timeago.js"
function Post({post}) {
  const [like,setLike] = useState(post.like)
  const [isLiked,setIsLiked] = useState(false)
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  console.log(user.profilePicture)
  
  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
  useEffect(() => {
    const fetchUser = async ()=>{
     try{
     const res = await axios.get(`/api/user?userId=${post.userId}`)
     console.log(res.data)
     setUser(res.data)
     }catch(err){
     console.log(err)
     }
    }
    fetchUser()
   }, [post.userId])
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                  <Link to={`profile/${user.username}`} style={{textDecoration:'none'}}>
                    <img src={user.profilePicture || PF+"avatar.png"} alt="" className="postProfileImg" />
                    </Link>
                    <span className="postUserName">{user.username}</span>
                    <span className="postDate">{format(post.createdAt)}</span>
                  
                </div>
                <div className="postTopRight">
                <MoreVertIcon />
                </div>
            </div>
            
            <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img className="postImg" src={PF+post.img} alt="" />
        </div>
            <div className="postBottom">
            <div className="postBottomLeft">
            <ThumbUpIcon className='postBottomIcon' onClick={likeHandler}/>
            <ThumbDownIcon className='postBottomIcon' onClick={likeHandler}/>
            <span className="postLikeCounter">{post.likes.length} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postBottomComment">comments {post.comment}</span>
          </div>
            </div>
        </div>
    </div>
    
  )
}

export default Post