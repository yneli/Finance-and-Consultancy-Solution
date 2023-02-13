import style from "./PracticeBlock.module.scss";
export const PracticeBlock = () => {
  return <div className={style.practiceBlock}>
    <div className={style.container}>
      <div className={style.text}>
        <h3 className={style.title}>Practice Advice</h3>
        <div className={style.about}>
          Problems trying to resolve the conflict between <br />
the two major realms of Classical physics: Newtonian mechanics
        </div></div>
      <div className={style.columns}>
      <div className={style.item}>
          <div className={style.block}>
            <div className={style.title_item}>Work better together</div>
            <div className={style.text_item}>They finally obtained 
a consistent description 
of the behaviour </div></div><img src="./assets/smal1.jpg" alt="" /></div>   
<div className={style.item}>
          <div className={style.block}>
            <div className={style.title_item}>Work better together</div>
            <div className={style.text_item}>They finally obtained 
a consistent description 
of the behaviour </div></div><img src="./assets/smal1.jpg" alt="" /></div>   
<div className={style.item}>
          <div className={style.block}>
            <div className={style.title_item}>Work better together</div>
            <div className={style.text_item}>They finally obtained 
a consistent description 
of the behaviour </div></div><img src="./assets/smal1.jpg" alt="" /></div>   
<div className={style.item}>
          <div className={style.block}>
            <div className={style.title_item}>Work better together</div>
            <div className={style.text_item}>They finally obtained 
a consistent description 
of the behaviour </div></div><img src="./assets/smal1.jpg" alt="" /></div>   
      </div>
    </div>
  </div>;
};