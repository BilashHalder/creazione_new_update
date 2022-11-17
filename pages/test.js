import React from 'react'
import {Box,Drawer,Divider,Grid ,List,ListItem, ListItemText   } from '@mui/material';
export default function test() {
  let menu=["!st Item","Item 2","Item 3","Item 4","Item 5"]
  return (
    <Drawer anchor={'left'}  open={true} >
      <List>
        {
          menu.map((item,index)=>{
            return <ListItem key={index}>
            <ListItemText> {item} </ListItemText>
          </ListItem>
          })
        }
        
        
      </List>


  </Drawer>
  )
}
