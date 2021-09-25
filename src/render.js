import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import {addMessage, addPost, updateNewMessage, updateNewPostText} from "./redux/state";
import state from "./redux/state";


let rerenderEntireTree = ()=>{
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
                addMessage={addMessage}
                updateNewMessage={updateNewMessage}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

export default rerenderEntireTree;