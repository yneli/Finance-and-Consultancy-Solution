import style from "./DesigningBlock.module.scss";
export const DesigningBlock = () => {
  return <div className={style.designing}>
    <div className={style.container}>
        <div className={style.text}>
            <h3 className={style.title}>Designing Better Experience</h3>
            <div className={style.about}>Problems trying to resolve the conflict between the two major realms 
of Classical physics: Newtonian mechanics </div>
        </div>
        <div className={style.desblocks}>
            <div className={style.item}>
                <img src="./assets/ludi.svg" alt="" />
                <div className={style.count}>972 +</div>
                <div className={style.product}>Consumer Products </div>
            </div>
            <div className={style.item}>
            <img src="./assets/ludi.svg" alt="" />
                <div className={style.count}>972 +</div>
                <div className={style.product}>Consumer Products </div>
            </div>
            <div className={style.item}>
            <img src="./assets/ludi.svg" alt="" />
                <div className={style.count}>972 +</div>
                <div className={style.product}>Consumer Products </div>
            </div>
            <div className={style.item}>
            <img src="./assets/ludi.svg" alt="" />
                <div className={style.count}>972 +</div>
                <div className={style.product}>Consumer Products </div>
            </div>
        </div>
    </div>
  </div>;
};