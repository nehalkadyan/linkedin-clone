import React from 'react'
import "./header.css";
import SearchIcon from '@mui/icons-material/Search';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { logout } from '../redux/userSlice';

const Header = () => {


   const dispatch = useDispatch()

   const logoutOfApp = () => {
     dispatch(logout());
     auth.signOut()
   }

  return (
    <div className='header'>
       <div className='header__left'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png" alt="logo"/>

          <div className='header__search'>
             <SearchIcon />
             <input placeholder='Search' type="text"/>
          </div>
       </div>

       <div className='header__right'>
           <HeaderOptions Icon = {HomeIcon} title="Home" />
           <HeaderOptions Icon = {SupervisorAccountIcon} title="My Network"/>
           <HeaderOptions Icon = {BusinessCenterIcon} title="Jobs"/>
           <HeaderOptions Icon = {ChatIcon} title="Chat"/>
           <HeaderOptions Icon = {NotificationsIcon} title="Notifications"/>
           <HeaderOptions avatar = {true} onClick={logoutOfApp} title="me"/>
       </div>
    </div>
  )
}

export default Header