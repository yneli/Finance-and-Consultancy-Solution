import style from "./Home.module.scss";
import { BoxAbout } from "../BoxAbout/BoxAbout";
import { TitleContent } from "../TitleContent/TitleContent";
import { DesigningBlock } from "../DesigningBlock/DesigningBlock";
import { PracticeBlock } from "../PracticeBlock/PracticeBlock";

export const Home = () => {
  return (
    <>
      <div className={style.home}>
        <div className={style.mainePage}>
          <TitleContent/>
        </div>
        <BoxAbout/>
      </div>
      <DesigningBlock/>
      <PracticeBlock/> 
    </>);
};