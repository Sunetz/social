import rerenderEntireTree from "../render";


let state ={
    dialogsPage:{
        dialogs: [
        { 
            id: 1, 
            name: 'Lotta', 
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr5iC7wPEtSrt56c_GKUrxr_WJl-QwD_DK8VhRBGpVi4jTj5Ow-Lr-JBzOU4MDjcp7FE8&usqp=CAU' },
        { 
            id: 2, 
            name: 'Kyle', 
            url: 'https://www.shortlist.com/media/images/2019/05/20-cartoon-characters-that-are-cooler-than-you-2-1556694961-mtQk-column-width-inline.jpg' },
        { 
            id: 3, 
            name: 'Ustas', 
            url:'https://p.kindpng.com/picc/s/14-146511_transparent-cartoon-character-png-cartoon-characters-adventure-time.png'},
        { 
            id: 4, 
            name: 'Iggi', 
            url:'https://img.buzzfeed.com/buzzfeed-static/static/2018-08/1/16/tmp/buzzfeed-prod-web-06/18744028b408f907a59e0b9229fc85ef-8.jpg?downsize=900:*&output-format=auto&output-quality=auto' },
        { 
            id: 5, 
            name: 'Elsa', 
            url:'https://lumiere-a.akamaihd.net/v1/images/ct_frozen_elsa_18466_22a50822.jpeg?region=0,0,600,600' }], 
        messages: [
            { id: 1, message: 'Hallo' },
            { id: 2, message: 'Hi' },
            { id: 3, message: 'Aloha' },
            { id: 4, message: 'LAla' },
            { id: 5, message: 'yoyooyoy' },
            { id: 6, message: 'yoyooyoy' }],
        newMessageText: ''},
    profilePage:{
        posts: [
            { id: 1, message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", likesCount: 12 },

            { id: 2, message: "Why do we use it?It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose", likesCount: 15 },
            { id: 3, message: 'Hiasdfghbl;sdfghbnmsdfghjkln;;lpkojihugynrdfgh', likesCount: 4 },
            { id: 4, message: 'Hiasdfghbl;sdfghbnmsdfghjkln;;lpkojihugynrdfgh', likesCount: 14 }],
        newPostText: ''},

    sidebar:{
        friends: 
        [{ 
            id: 1, 
            name: 'Lotta', 
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr5iC7wPEtSrt56c_GKUrxr_WJl-QwD_DK8VhRBGpVi4jTj5Ow-Lr-JBzOU4MDjcp7FE8&usqp=CAU' },
        { 
            id: 2, 
            name: 'Kyle', 
            url: 'https://www.shortlist.com/media/images/2019/05/20-cartoon-characters-that-are-cooler-than-you-2-1556694961-mtQk-column-width-inline.jpg' },
        { 
            id: 3, 
            name: 'Ustas', 
            url:'https://p.kindpng.com/picc/s/14-146511_transparent-cartoon-character-png-cartoon-characters-adventure-time.png'},
        { 
            id: 4, 
            name: 'Iggi', 
            url:'https://img.buzzfeed.com/buzzfeed-static/static/2018-08/1/16/tmp/buzzfeed-prod-web-06/18744028b408f907a59e0b9229fc85ef-8.jpg?downsize=900:*&output-format=auto&output-quality=auto' },
        { 
            id: 5, 
            name: 'Elsa', 
            url:'https://lumiere-a.akamaihd.net/v1/images/ct_frozen_elsa_18466_22a50822.jpeg?region=0,0,600,600' }]}
}

window.state = state;


//=====================MESSAGES-DIALOGS====================//

export const addMessage = () =>{
    let newMessage = {
        id: state.dialogsPage.messages.length,
        message: state.dialogsPage.newMessageText
    };

    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree();
}

export const updateNewMessage = (newTextMessage) =>{
    state.dialogsPage.newMessageText = newTextMessage;
    rerenderEntireTree(state);
}
//===============POSTS====================================//

export const addPost = () =>{
    let newPost = {
        id: state.profilePage.posts.length,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree()
}

export const updateNewPostText = (newText) =>{
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)
}

export default state
