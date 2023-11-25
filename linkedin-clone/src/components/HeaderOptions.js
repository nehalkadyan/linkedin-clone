import React from 'react'
import "./headerOptions.css"
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'

const HeaderOptions = ({avatar, Icon, title, onClick}) => {

  const user = useSelector(selectUser)

  return (
    <div onClick = {onClick} className="headerOption">
       {Icon && <Icon className="headerOption__icon"/>}
       {avatar && <Avatar className="headerOption__avatar" alt="Remy Sharp"  >
        {user?.email[0]}
        </Avatar>

       }
       <h3 className='headerOption__title'>{title}</h3>
    </div>
  )
}

export default HeaderOptions