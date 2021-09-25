import React from "react";
import s from '../css/UserInfo.module.css';

export default function UserInfo(){
    return (
        <div className={s.UserInfo}>
            <div className={s.item}>Name</div>
            <div className={s.item}><i>City</i></div>
        </div>
    )
}