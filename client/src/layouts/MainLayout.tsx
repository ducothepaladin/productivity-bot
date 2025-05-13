import MainNavbar from "@/components/MainNavbar"
import { Outlet } from "react-router-dom"

export default function MainLayout() {
  return (
    <div>
        <MainNavbar />
        <Outlet />
    </div>
  )
}
