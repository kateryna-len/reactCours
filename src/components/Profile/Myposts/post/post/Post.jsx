import React from "react";
import s from "./Post.module.css"

const Post = (props) => {
    return <div className={s.item}>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAP1BMVEX/pQD/ogD/0qD/16P/oAD/3Kr/4bT/5b7/68v/1KD/2qf/5Lv/8t7/ngD/nAD/0Jr///7/+fP/9eX/7dH/6NCyZbD+AAABcUlEQVR4nO3dy07CABBA0QLSgjzq6/+/1S7c6AZjQswt53zAZO5+khleXt/O74fDNE2ncbH/svvuuP2r4+6m5/1vjL8x/XQ6D+P1sni6ZfNXNyff13UexqdhzTZbhXVL4V5hm8I+hX0K+xT2KexbCp9XX7hT2KawT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9inse4jC7ea/l7grhX0K+xT2KexT2KewT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9i2Fx9Xf06z/YkhhnMI+hX0K+xT2KexT2KewT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9Cvse4s+MwjiFfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9hn8I+hX1L4aiwTWGfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9h30MUTgrbFPYp7FPYp7BPYZ/CPoV9D1F4um7W7DIP53m7ZvPHJ5NVE2IZvrGJAAAAAElFTkSuQmCC" />
      {props.message}
      <div>
        like {props.like}
      </div>
      </div>
      
}

export default Post;