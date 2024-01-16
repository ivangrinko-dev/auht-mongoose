"use client";
import style from "./reg.module.css";
import Header from "@/components/Header/Header";


export default function Reg() {
  const [input, setInput] = useState({
    name: "",
    surname: "",
    age: "",
    email: "",
    pwd: "",
  });

  function chengeInp(event) {
  
  return (
    <div>
      <Header />
      <p>Вы авторизованны в системе</p>
    </div>
  );
}
