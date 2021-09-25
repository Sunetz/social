import React from "react";
import s from '../css/Friends.module.css';

export default function FriendItem(props){
    return (
        <div className={s.friendItem}>
            <img src={props.url}/>
            <p>{props.name}</p>
        </div>
    )
}