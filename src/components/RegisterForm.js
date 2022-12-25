import { Button, TextField, FormGroup, FormControlLabel, Checkbox, FormControl, InputLabel, Select, MenuItem, Radio, RadioGroup } from '@mui/material'
import React, {useState} from 'react'

const RegisterForm = () => {
  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    password: "",
    subscribe: false,
    age: 0,
    gender: ""
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
        <FormControl>
            <InputLabel>Age</InputLabel>
            <Select name='age' label="Age" value={formInputs.age} onChange={handleChange}>
                <MenuItem value={0}>0</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={30}>30</MenuItem>
            </Select>
        </FormControl>
        <RadioGroup name='gender' onChange={handleChange} defaultValue="female">
            <FormControlLabel value={"Female"} control={<Radio />} label="Female" />
            <FormControlLabel value={"male"} control={<Radio />} label="Male" />
        </RadioGroup>
        <Button size="medium" sx={{width:"10%"}} variant='outlined' type='submit'>Register</Button>
      </form>
    </div>
  )
}

export default RegisterForm
