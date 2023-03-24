import React,{useState} from "react";
import { AppBar, Tabs, Tab, Toolbar, Typography } from "@mui/material";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import {NavLink} from 'react-router-dom';

const Header = () => {
    const[value,setValue]=useState();
  return (
    <div>
      <AppBar sx={{backgroundColor:"#232F3D"}} position="sticky">
        <Toolbar>
          <Typography>
            <LibraryBooksOutlinedIcon />
          </Typography>
          <Tabs textColor="inherit" indicatorColor="primary" value={value}
          sx={{ml:"auto"}}
          onChange={(e,val)=>setValue(val)}>
            <Tab LinkComponent={NavLink} to="/add" label="Add Product" />
            <Tab LinkComponent={NavLink} to="/books" label="Books" />
            <Tab LinkComponent={NavLink} to="/about" label="About us" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
