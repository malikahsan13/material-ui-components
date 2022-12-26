import {
  AppBar,
  Typography,
  Button,
  Toolbar,
  Tabs,
  Tab,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Modal,
  Box
} from "@mui/material";
import React, { useState } from "react";

function Page1() {
  const [val, setVal] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <AppBar position="relative">
        <Toolbar position="static">
          <Typography>Material UI</Typography>
          <Tabs
            value={val}
            onChange={(e, val) => setVal(val)}
            indicatorColor="primary"
            textColor="inherit"
          >
            <Tab label="Home" />
            <Tab label="About" />
            <Tab label="Contact Us" />
          </Tabs>
          <Button sx={{ marginLeft: "auto" }} variant="contained">
            Register
          </Button>
        </Toolbar>
      </AppBar>
      <Card position="absolute" sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            sx={{ height: 140 }}
            image="https://i.natgeofe.com/n/5506954d-6e0f-444c-aa83-a24adbe874e1/reptiles-hero_4x3.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small" onClick={()=>setOpenDialog(true)}>Learn More</Button>
        </CardActions>
      </Card>
      <Dialog open={openDialog} onClose={()=>setOpenDialog(false)}>
        <DialogTitle>
            Are you sure ?
        </DialogTitle>
        <DialogContent>
            <DialogContentText>
                This Form will be submitted if you agree.
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button variant="contained">Cancel</Button>
            <Button variant="contained">Agree</Button>
        </DialogActions>
      </Dialog>
      <Button onClick={()=>{setModalOpen(true)}} variant="contained">Open Modal</Button>
      <Modal open={modalOpen} onClose={()=>setModalOpen(false)} sx={{color:"hideBackdrop"}}> 
        <Box position="relative" top="50%" left="50%">
            <Typography>
                This is Modal Box
            </Typography>
            <Button variant="outlined">Ok</Button>
            <Button variant="outlined">Cancel</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default Page1;
