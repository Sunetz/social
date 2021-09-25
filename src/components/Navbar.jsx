import React from "react";
import { NavLink } from "react-router-dom";
import classes from '../css/Navbar.module.css';
import Friends from "./Friends";

export default function Navbar(props){
    return (
    <div className={classes.bar}>
    <nav className={classes.navbar}>
        <div className={classes.item}><NavLink to='/profile' activeClassName={classes.active}> Home </NavLink></div>
        <div className={classes.item}><NavLink to='/dialogs' activeClassName={classes.active}> Messages </NavLink></div>
        <div className={classes.item}><NavLink to='/feed' activeClassName={classes.active}> Feed </NavLink></div>
        <div className={classes.item}><NavLink to='/music' activeClassName={classes.active}> Music </NavLink></div>
        <div className={classes.item}><NavLink to='/settings' activeClassName={classes.active}> Settings </NavLink></div>
        <br/><br/><br/><br/>
        <div className={classes.item}><NavLink to='/friends' activeClassName={classes.active}>Friends </NavLink></div>
    </nav>
        {/*<Friends state={props.state.sidebar}/>*/}
    </div>
    )
}