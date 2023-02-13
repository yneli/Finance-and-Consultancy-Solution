import style from "./Footer.module.scss";
export const Footer = () => {
  return <div className={style.footer}>
    <div className={style.container}>
      <div className={style.items}>
        <div className={style.icons}>
          <img src="./assets/vec1.png" alt="" />
          <img src="./assets/vec2.png" alt="" />
          <img src="./assets/vec3.png" alt="" />
          <img src="./assets/vec4.png" alt="" />
          <img src="./assets/vec5.png" alt="" />
          <img src="./assets/vec6.png" alt="" />
        </div>
        <div className={style.search_block}>
          <div className={style.search}>
            <div className={style.text}>Subscribe For Latest Newsletter</div>
            <div className={style.search_input}>
              <input type="text" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={style.line}></div>
  </div>;
};