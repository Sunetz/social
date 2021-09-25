import React from "react";
import { addPost } from "../../../redux/state";
import s from '../css/MyPosts.module.css';
import NewPost from "./NewPost.jsx";
import Post from './Post.jsx'

export default function MyPosts(props){

let postElements = props.posts.map(post => <Post
                                                message={post.message}
                                                likesCount={post.likesCount}/>)
    

    return (
        <div className={s.posts}>
            {postElements}
            <NewPost
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
                newPostText={props.newPostText}/>
        </div>
        )
    }