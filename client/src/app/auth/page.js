"use client";
import Header from "@/components/Header/Header";
import style from "./auth.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Auth() {
  const [input, setInput] = useState({ email: "", pwd: "" });
  const router = useRouter();

  function chengeInp(event) {
    setInput({ ...input, [event.target.name]: event.target.value });
  }
  async function authUser() {
    const result = await axios.post("http://localhost:3001/user/auth", input, {
      withCredentials: true,
    });
    console.log(result.data);
    console.log(input);
    router.push("/home");
  }

  return (
    <div>
      <Header />
      <div className={style.wrapper}>
        <h1>Authorization</h1>
        <div className={style.wrapper_1}>
          <div className={style.img}></div>
          <div wrapper_2>
            <TextField
              className={style.inp}
              fullWidth
              label="email"
              id="fullWidth"
              name="email"
              onChange={chengeInp}
            />
            <TextField
              className={style.inp}
              fullWidth
              label="pwd"
              id="fullWidth"
              name="pwd"
              onChange={chengeInp}
            />
            <Button variant="outlined" onClick={authUser}>
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
