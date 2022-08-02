import React, { useEffect, useState } from 'react'
import Post from '../posts/Post'
import Share from '../share/Share'
import axios from "axios"

function Feed() {
  const [post, setPost] = useState([])
  useEffect(() => {
   const fetchPost = async ()=>{
    const res = await axios.get("http://localhost:8800/post/timeline/62c04137586c325564cc3516")
    console.log(res.data)
    //setPosts(res.data)
   }
   fetchPost()
  }, [])
  return (
    <div className='feed'>
      <div className="feedWrapper">
      <Share/>
      {/* {Posts.map((p) => (
        <Post key={p.id} post={p}/>
      ))} */}
      </div>
    </div>
  )
}

export default Feed