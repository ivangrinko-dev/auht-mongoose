import Header from "@/components/Header/Header";
import style from "./page.module.css";
export default function Home() {
  return (
    <div className={style.wrapper}>
      <Header />
      <h1>MainPage</h1>
      <div className={style.img}></div>
    </div>
  );
}
