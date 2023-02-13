import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Layout } from "../components/Layout/Layout";
import { Home } from "../components/Home/Home";

export const Test = () => {
  return <Layout header={<Header/>} footer={<Footer/>}>
    <Home/>
  </Layout>;
};