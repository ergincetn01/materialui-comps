import {
  Typography,
  Button,
  FormControl,
  InputLabel,
  Radio,RadioGroup, FormLabel,
  MenuItem,
  TextField,
  FormControlLabel,
  Checkbox,
  FormGroup,
  Select
} from "@mui/material";
import React, { useState } from "react";


const Test = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    age: 10,
    gender: ""

  })
  const handleChange=(e)=> {
        setInputs((prevState)=>({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
  }
  return (
    <div>
      <Typography variant="h1" sx={{ color: "red" }}>
        Hello
      </Typography>
      <hr />
      <Typography variant="h4">Buttons</Typography>
      <br />
      <Button color="success" variant="contained" size="large">
        Success
      </Button>
      <Button color="info" variant="outlined" size="info">
        Success
      </Button>
      <Button color="error" variant="text" size="large">
        Error
      </Button>
      <hr />
      <Typography variant="h5">TextField</Typography>
      <br />
      <TextField
        type={"text"}
        name="name"
        value={inputs.name}
        onChange={handleChange}
        label="filled text field"
        variant="filled"
        placeholder="placeholderrrrrrr"
      />
      <TextField
      value={inputs.email}
      name="email"
      onChange={handleChange}
        type={"email"}
        label="outlined email field"
        variant="outlined"
        placeholder="placeholderrrrrrr"
      />
      <TextField
      value={inputs.password}
        type={"password"}
        name="password"
        onChange={handleChange}
        label="standart password field"
        variant="standard"
        placeholder=""
      />

      <hr />
      <Typography>name: {inputs.name} -email: {inputs.email} - psw: {inputs.password} </Typography>
      <hr />
      <Typography>Form with fields</Typography>
      <br />
      <form>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="checkbox"
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={inputs.age}
              label="Age"
              onChange={handleChange}
              name="age"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </FormGroup>
        <Typography>Age: {inputs.age} </Typography>
      </form>

      <FormControl>
  <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    value={inputs.gender}
    onChange={handleChange}
    name="gender"
  >
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="other" control={<Radio />} label="Other" />
  </RadioGroup>
</FormControl>
<Typography>Gender: {inputs.gender} </Typography>
    </div>
  );
};

export default Test;
