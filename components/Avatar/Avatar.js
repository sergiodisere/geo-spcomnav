import React, { useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useRouter } from 'next/router'

import {signOut} from '../../firebase/client'

const Avatar = ({src, username}) => {
  const router=useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = ()  => {
    signOut().then(()=>{
      console.log("Sign-Out Successfull")
    })
  }
  const goProfile = () => {
    router.push('/profile')
  }
  return (
    <>
      <img src={src} alt="Avatar" className="avatar"/>    
      
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <strong className="ml-2">{username}</strong>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={goProfile}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
    </>
  )
}
export default Avatar;