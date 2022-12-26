import { AppBar, Typography, Button, Toolbar, Tabs, Tab } from "@mui/material";
import React, {useState} from "react";

function Page1() {
  const [val, setVal] = useState(0)
  return (
    <div>
      <AppBar>
        <Toolbar position="static">
          <Typography>Material UI</Typography>
          <Tabs value={val} onChange={(e,val)=>setVal(val)} indicatorColor="primary" textColor="inherit">
            <Tab label="Home" />
            <Tab label="About" />
            <Tab label="Contact Us" />
          </Tabs>
          <Button sx={{marginLeft:"auto"}} variant="contained">Register</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Page1;
