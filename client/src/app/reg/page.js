"use client"
import Header from "@/components/Header/Header";

export default function Auth() {
  return (
    <div>
        <Header/>
      <h1>Registration</h1>
      <input type="text" placeholder="name" />
      <input type="text" placeholder="surname" />
      <input type="text" placeholder="age" />
      <input type="text" placeholder="email" />
      <input type="text" placeholder="password" />
      <button>Sign Up</button>
    </div>
  );
}
