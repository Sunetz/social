import React from "react";
import s from '../css/Post.module.css'
import UserHeader from "./UserHeader.jsx";

export default function Post(props){
    return (
        <div className={s.item}>
            <UserHeader/>
            <div className={s.PostComment}>
                <p className={s.message}>{props.message}</p>
                <p>Likes: {props.likesCount}</p>
            </div>
            
        </div>
        
    )
}