"use client";
import style from "./reg.module.css";
import Header from "@/components/Header/Header";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button'
import { useState } from "react";
import axios from "axios";

export default function Reg() {
  const [input, setInput] = useState({name: "", surname: "", age:"", email:"", password:""});

  function chengeInp(event) {
    setInput({ ...input, [event.target.name]: event.target.value });
  }

  async function  show(){
      const result = await axios.post("http://localhost:3001/user", input)
      console.log(result.data);
    console.log(input);
     }


  return (
    <div>
      <Header />
      <div className={style.wrapper}>
      <h1>Registration</h1>
        <TextField fullWidth label="name" id="fullWidth" onChange={chengeInp}/>
        <TextField fullWidth label="surname" id="fullWidth" onChange={chengeInp}/>
        <TextField fullWidth label="age" id="fullWidth" onChange={chengeInp}/>
        <TextField fullWidth label="email" id="fullWidth" onChange={chengeInp}/>
        <TextField fullWidth label="passowrd" id="fullWidth" onChange={chengeInp}/>

        <Button variant="outlined" onClick={show}>Sign Up</Button>
      </div>
    </div>
  );
}
