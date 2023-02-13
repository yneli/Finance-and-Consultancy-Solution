import style from "./Layout.module.scss";
export const Layout = ({ header, children, footer }: { 
    header?:React.ReactNode, 
    children?:React.ReactNode, 
    footer?: React.ReactNode}) => {
  return <div className={style.container}>
    <div className={style.Layout}>
      {header}
      {children}
    </div>
    {footer}
  </div>;
};