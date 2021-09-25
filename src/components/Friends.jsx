import React from "react";
import FriendItem from "./FriendItem";
import s from "../css/Friends.module.css";

export default function Friends(props){
    let friendsElements = props.state.friends.map ( friend => <FriendItem name={friend.name} url={friend.url}/>)

    return (
        <div className={s.friends}>
            {friendsElements}
        </div>
    )
}