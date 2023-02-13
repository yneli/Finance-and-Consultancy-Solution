import style from "./BoxAbout.module.scss";
export const BoxAbout = () => {
  return <div className={style.container}>
  <div className={style.boxAbout}>
    <div className={style.boxItem}>
      <img src="./assets/icon3.svg" alt="" />
      <div className={style.boxTitle}>Environmental Consulting</div>
      <div className={style.boxText}>We focus on ergonomics and meeting you where you work.</div>
    </div>
    <div className={style.boxItem}>
      <img src="./assets/icon2.svg"alt="" />
      <div className={style.boxTitle}>Environmental Consulting</div>
      <div className={style.boxText}>We focus on ergonomics and meeting you where you work.</div>
    </div>
    <div className={style.boxItem}>
      <img src="./assets/icon1.svg" alt="" />
      <div className={style.boxTitle}>Environmental Consulting</div>
      <div className={style.boxText}>We focus on ergonomics and meeting you where you work.</div>
    </div>
  </div>
  </div>;
};