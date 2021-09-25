import React from "react";
//import {addPost, updateNewPostText} from "../../../redux/state";
import s from '../css/Profile.module.css';
import MyPosts from "./MyPosts.jsx";

export default function Profile(props){
    return (
        <div className={s.content}>
            
            
        <div>
            <h3>My Posts</h3>
        </div>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}/>
        </div>
        )
    }