import { Outlet } from "react-router-dom"
import { Header } from "../header/Header"
import { Footer } from "../footerPage/Footer"


export const Root = () => {
  return (
    <>
        <Header></Header>
        
        <Outlet></Outlet>

        <Footer></Footer>

    </>
  )
}
