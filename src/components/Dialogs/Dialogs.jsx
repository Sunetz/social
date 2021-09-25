import s from './Dialogs.module.css';
import React from 'react';
import DialogItem from './DialogItem.jsx';
import Message from './Message.jsx';
import NewMessage from './NewMessage.jsx';


export default function Dialogs(props){

    let dialogElements = props.dialogsPage.dialogs.map( dialog => <DialogItem
        name={dialog.name}
        id={dialog.id}
        url={dialog.url}/>);

    let messageElements = props.dialogsPage.messages.map ( message => <Message message={message.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <NewMessage addMessage={props.addMessage}
                            updateNewMessage={props.updateNewMessage}/>
            </div>
            
        </div>
    )
}