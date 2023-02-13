import style from "./Header.module.scss";
import { Link } from "react-router-dom";
import { NAVBAR_ITEMS }from "./constants";
export const Header = () => {
  return <div className={style.container}>
    <div className={style.header}>
      <div className={style.title}>
        <Link to={"."}>Relvise</Link>
      </div>
      <nav className={style.navbar}>
        <ul>
          {NAVBAR_ITEMS?.map(item => <li className={style.item}><Link to={item.path}>{item.name}</Link></li>)}
        </ul>
      </nav>
      <div className={style.menuburger}>
      </div>
    </div>
  </div>;
};