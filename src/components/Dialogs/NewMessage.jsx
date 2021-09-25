import React from "react";
import s from './Dialogs.module.css';

export default function NewMessage(props){

    let newMessageElement = React.createRef();

    let addNewMessage=()=>{
        props.addMessage();
    }

    let onMessageChange = ()=>{
        let text = newMessageElement.current.value;
        props.updateNewMessage(text);
    }
    return (
        <div className={s.newMessage}>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <textarea
                onChange={onMessageChange}
                ref={newMessageElement}
                placeholder="type your message"
                value={props.newMessageText}/>
            <br/>
            <button onClick={addNewMessage}>Send message</button>
        </div>
    )
}