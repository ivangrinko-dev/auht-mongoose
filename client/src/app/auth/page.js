"use client"
import Header from "@/components/Header/Header";
import style from "./auth.module.css";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button'

export default function Auth() {
    return (
   
      <div>
      <Header />
      <div className={style.wrapper}>
      <h1>Authorization</h1>
        <TextField fullWidth label="email" id="fullWidth" />
        <TextField fullWidth label="passowrd" id="fullWidth" />

        <Button variant="outlined">Sign In</Button>
      </div>
    </div>
      
    );
  }
  