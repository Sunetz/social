import Navbar from './components/Navbar.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import React, {Component} from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Profile from './components/Profile/comp/Profile.jsx'
import { BrowserRouter, Route } from 'react-router-dom';
import Feed from './components/Feed.jsx';
import Music from './components/Music.jsx';
import Settings from './components/Settings.jsx';
import Friends from './components/Friends.jsx';

const App=(props)=> {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <Friends state={props.state.sidebar}/>

        <div className='App-content'>
          <div className='img-wrapper'>
            <img src='https://www.mysmartgroup.co.uk/wp-content/uploads/2017/04/header-bg-test.png'/>
          </div>
          <Route path="/dialogs" render={()=><Dialogs
              dialogsPage={props.state.dialogsPage}
              addMessage={props.addMessage}
              updateNewMessage={props.updateNewMessage}/>}/>
          <Route path="/profile" render={()=><Profile
              profilePage={props.state.profilePage}
              addPost={props.addPost}
              updateNewPostText={props.updateNewPostText}
              />}/>
          <Route path="/feed" render={()=><Feed />}/>
          <Route path="/music" render={()=><Music />}/>
          <Route path="/settings" render={()=><Settings />}/>         
        </div>
      </div>
  </BrowserRouter>
  )
}

export default App;
