import style from "./Button.module.scss";
import React from "react";
export const Button = ({ children, bgcolor, brColor, color }: { children ?:any, bgcolor ?:any, brColor?: string, color?: string}) => {
  const btnRef:any = React.useRef(null);
  
  React.useEffect(() => {
    btnRef.current.style.backgroundColor = bgcolor;
    btnRef.current.style.color = color;
    btnRef.current.style.borderColor = brColor;
  },[]);
  
  return <>
    <button ref={btnRef} className={style.btn}>{children}</button>
  </>;
};