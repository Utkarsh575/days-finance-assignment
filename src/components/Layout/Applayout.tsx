import { ReactElement } from "react"
import Navbar from "../Navbar"
import Sidebar from "../Sidebar"
type LayoutProps = {
    children? : ReactElement
}

export default function Layout({ children }:LayoutProps) {
    return (
      <>
        <Navbar />
        <Sidebar />
        <main>{children}</main>

      </>
    )
  }
  