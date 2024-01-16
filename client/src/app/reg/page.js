"use client";
import style from "./reg.module.css";
import Header from "@/components/Header/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";
import {useRouter} from 'next/router'

export default function Reg() {
  const [input, setInput] = useState({
    name: "",
    surname: "",
    age: "",
    email: "",
    pwd: "",
  });

  function chengeInp(event) {
    setInput({ ...input, [event.target.name]: event.target.value });
  }

  async function createUser() {
    const result = await axios.post("http://localhost:3001/user", input, {
      withCredentials: true,
    });
    console.log(result.data);
    console.log(input);
    useRouter
  }

  return (
    <div>
      <Header />
      <div className={style.wrapper}>
        <h1>Registration</h1>
        <TextField
          fullWidth
          label="name"
          id="fullWidth"
          name="name"
          onChange={chengeInp}
        />
        <TextField
          fullWidth
          label="surname"
          id="fullWidth"
          name="surname"
          onChange={chengeInp}
        />
        <TextField
          fullWidth
          label="age"
          id="fullWidth"
          name="age"
          onChange={chengeInp}
        />
        <TextField
          fullWidth
          label="email"
          id="fullWidth"
          name="email"
          onChange={chengeInp}
        />
        <TextField
          fullWidth
          label="passowrd"
          id="fullWidth"
          name="pwd"
          onChange={chengeInp}
        />

        <Button variant="outlined" onClick={createUser}>
          Sign Up
        </Button>
      </div>
    </div>
  );
}
