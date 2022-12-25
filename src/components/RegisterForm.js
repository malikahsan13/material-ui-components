import { Button, TextField, FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import React, {useState} from 'react'

const RegisterForm = () => {
  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    password: "",
    subscribe: false
  });

  const handleChange = (e) => {
    setFormInputs((prevState)=>({
        ...prevState,[e.target.name]: e.target.value 
    }))
  }

  const registerUser = (e) => {
    e.preventDefault();
    console.log(formInputs)
  }
  return (
    <div>
      <form style={{display:'flex', flexDirection:"column"}} onSubmit={registerUser}>
        <TextField value={formInputs.name} name="name" onChange={handleChange} sx={{margin:3, width:"10%"}} placeholder="Enter Name" variant='standard' type={"text"} />
        <TextField valeue={formInputs.email} name="email" onChange={handleChange} sx={{margin:3, width:"10%"}} placeholder="Enter Email" variant='standard' type={"email"} />
        <TextField value={formInputs.password} name="password" onChange={handleChange} sx={{margin:3, width:"10%"}} placeholder="Enter Password" variant='standard' type={"password"} />
        <FormGroup>
            <FormControlLabel control={<Checkbox />} name="subscribe" label="Subscribe" onChange={()=>setFormInputs((prevValue)=>({...prevValue,subscribe: !formInputs.subscribe}))} />
        </FormGroup>
        <Button size="medium" sx={{width:"10%"}} variant='outlined' type='submit'>Register</Button>
      </form>
    </div>
  )
}

export default RegisterForm
