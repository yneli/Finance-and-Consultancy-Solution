import style from "./TitleContent.module.scss";
import { Button } from "../Button/Button";
import { Backgroundimg } from "../BackgroundImg/Backgroundimg";
export const TitleContent = () => {
    return <div className={style.body_container}>
    <div className={style.main}>
      <h1>Finance and Consultancy Solution</h1>
      <div className={style.text}>
   We know how large objects will act, <br />
   but things on a small scale.
      </div>
      <div className={style.btn}>
      <Button bgcolor={"#FF7B47"} brColor={"#FF7B47"}>Get Quote Now</Button>
      <Button color={"#0D5C63"} brColor={"#0D5C63"}>Learn More</Button>
      </div>
    </div>
    <Backgroundimg/>
  </div>
}