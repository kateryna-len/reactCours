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
      <Post message="Hi, how are you!" like="15"/>
      <Post message="It's my first post" like="23" />
      <Post message="Lucky you" like = "12"/>
      
     
    </div> 
    </div> )
}

export default Mypost;