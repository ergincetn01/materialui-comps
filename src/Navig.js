import React from 'react'
import {AppBar, Button, Toolbar, Typography} from "@mui/material"


const Navig=()=> {
  return (

    <div>

    <AppBar>
        <Toolbar>
        <Button color= "error">BUTTON 1</Button>
            <Button variant='contained' color="info">BUTTON 1</Button>
            <Button variant='text' color="inherit">BUTTON 1</Button>


        </Toolbar>
    </AppBar>
    </div>
  )
}

export default Navig;