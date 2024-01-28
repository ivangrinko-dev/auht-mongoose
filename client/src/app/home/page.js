
import Header from "@/components/Header/Header";
import style from './home.module.css'

export default function RegUser() {
 
  return (
    <div className={style.wrapper}>
      <Header />
      <h1>Вы авторизованны в системе</h1>
      <div className={style.img}></div>
    </div>
  )
}
