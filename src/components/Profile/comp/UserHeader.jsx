import React from "react";
import UserInfo from "./UserInfo.jsx";


export default function UserHeader(){
    return (
        <div className='UserHeader'>
            <img src='https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FydG9vbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80' alt='avatar'/>
            
            <UserInfo />
        </div>
    )
}