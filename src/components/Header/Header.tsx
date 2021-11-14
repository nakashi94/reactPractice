import React, {FC} from 'react';
import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';

const Header: FC = () => {
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
