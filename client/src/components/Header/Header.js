import Link from "next/link";
import style from '../Header/header.module.css'
export default function Header() {
  return(
    <div className={style.wrapper}>
      <p><Link href='/auth'> Go to authorization page </Link></p>
      <p><Link href='/reg'> Go to registration page </Link></p>
      <p><Link href='/'> Go to MainPage </Link></p>
    </div>
  );
}
