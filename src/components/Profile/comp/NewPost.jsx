import React from "react";
import s from '../css/NewPost.module.css';

export default function NewPost(props){

    let newPostElement = React.createRef();
    
    let addPost = ()=>{
        props.addPost();
    }

    let onPostChange = ()=>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div className={s.NewPost}>
            <textarea onChange={onPostChange}
                      ref={newPostElement}
                      placeholder='type your message'
                      className={s.item}
                      value={props.newPostText}/>
            <button onClick={addPost} className={s.button}>Add post</button>
        </div>
    )
}
