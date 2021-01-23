import React from "react";
import s from "./Profiles.module.css";
import Mypost from "./Myposts/post/Mypost";

const Profiles = () => {
    return (<div className={s.content}>
    <div>
    <img src="https://vgtimes.ru/uploads/games_previews/41650/forest-2014_vgdb.jpg" />
    </div>
    
    <div className="description">
      ava + description
    </div>
   
      <Mypost />
    </div>);
}

export default Profiles;