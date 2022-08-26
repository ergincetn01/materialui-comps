import React, { useState } from "react";
import { Menu, MenuItem, Button, Tabs, Tab } from "@mui/material";

const MenuView = () => {
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
  return (
    <div>
      <Button variant="contained" onClick={handleClick}>
        Open Menu
      </Button>

      <Menu anchorEl={elem} open={isOpen} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Item1</MenuItem>
        <MenuItem onClick={handleClose}>ITem2</MenuItem>
        <MenuItem onClick={handleClose}>ITem3</MenuItem>
      </Menu>
    </div>
  );
};

export default MenuView;
