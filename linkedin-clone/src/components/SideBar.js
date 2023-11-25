import React from 'react';
import { useSelector } from 'react-redux';

import "./sideBar.css";
import { Avatar } from '@mui/material';
import { selectUser } from '../redux/userSlice';

const SideBar = () => {

  const user = useSelector(selectUser)

    const recentItem = (topic) => {
        return (
      <div className='sidebar__recentItem'>
        <span className='sidebar__hash'>#</span>
        <p>{topic}</p>
      </div>
        )
    }

  return (
    <div className='sidebar'>
       <div className='sidebar__top'>
          <img src="https://plus.unsplash.com/premium_photo-1665772800584-d2da6dba1e4b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt = ""/>
          <Avatar alt="Remy Sharp" src={user.photoUrl} > {user.email[0]}</Avatar>
          <h2>{user.displayName}</h2>
          <h4>{user.email}</h4>
       </div>

       <div className='sidebar__stats'>
         <div className='sidebar__stat'>
           <p>Who viewed you</p>
           <p className='sidebar__statNumber'>7,543</p>
         </div>
         <div className='sidebar__stat'>
         <p>views on post</p>
         <p className='sidebar__statNumber'>2,448</p>
          </div>
       </div>

       <div className='sidebar__button'>
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer")}
       </div>
    </div>
  )
}

export default SideBar