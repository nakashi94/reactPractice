import React from 'react';
import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
// import IconButton from  '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <div>
      <AppBar position="static">
        <ToolBar variant="dense">
          <h1>app_name</h1>
        </ToolBar>
      </AppBar>
    </div>
  )
}

export default Header
