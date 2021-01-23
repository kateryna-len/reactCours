import React from "react";
import s from "./Mypost.module.css"
import Post from "./post/Post";

const Mypost = () => {
    return (<div>
     <div>
    My posts
    <div>
      <textarea></textarea>
      <button>Add</button>
    </div>
    </div>
    <div className="posts">
      <Post />
      <Post />
      <Post />
      <Post />
     
    </div> 
    </div> )
}

export default Mypost;