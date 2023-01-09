import { Outlet } from "react-router-dom"
import { Header } from "../../components/Header";

export function LayoutHeader() {
  return (
    <div>
      <Header itens={undefined}/>
      <Outlet/>
    </div>
  )
}