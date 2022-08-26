import {
  Box,
  Tabs,
  AppBar,
  Toolbar,
  Tab,
  TabPanel,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MenuView from "./Menu";
const TabView = () => {
  const [elem, setElem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    setElem(null);
  };

  const handleClick = (e) => {
    setElem(e.currentTarget);
    setIsOpen(true);
  };

  const [key, setKey] = useState(0);

  return (
    <div>
      <Typography>Dynamic Navigation Menu</Typography>
      <AppBar>
        <Toolbar>
          <Tabs
            indicatorColor="secondary"
            value={key}
            textColor="secondary"
            onChange={(e, val) => setKey(val)}
          >
            <Tab label="Item One" />

            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default TabView;
