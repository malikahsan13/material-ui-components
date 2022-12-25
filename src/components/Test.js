import React, { useState } from 'react'
import { Button, TextField, Typography } from '@mui/material'

const Test = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <>
      <Typography variant='h4' sx={{color:"red", border: "1px orange solid", borderRadius: "15px"}}>MUI Designs</Typography>
      <div>
        <TextField value={name} onChange={(e)=>setName(e.target.value)} sx={{margin: 3}} type="text" placeholder="Enter Name" variant='outlined' />
        <TextField value={email} onChange={(e)=>setEmail(e.target.value)} sx={{margin: 3}} type="email" placeholder="Enter Email" variant='filled' />
        <TextField value={password} onChange={(e)=>setPassword(e.target.value)} sx={{margin: 3}} type="password" placeholder="Enter Password" variant='standard' />
      </div>

      <Button size='large' color='info' sx={{margin: 3}} variant="outlined" onClick={()=>alert("Button 1 Clicked")}>Button 1</Button>
      <Button size='medium' color='success' sx={{margin: 3}} variant="contained" onClick={()=>alert("Button 2 Clicked")}>Button 2</Button>
      <Button size='small' color='error' sx={{margin: 3}} variant="text" onClick={()=>alert("Button 3 cClicked")}>Button 3</Button>

    </>
  )
}

export default Test
