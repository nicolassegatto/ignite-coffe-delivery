import { MapPin } from "phosphor-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { DemandContext } from "../../context/DemandContext";
import { CartButton } from "../Buttons";
import { Logo } from "../Logo";
import { Address, ButtonsContent, CartContent, HeaderContainer, HeaderContent } from "./styled";


export function Header() {

  const {pedidos} = useContext(DemandContext)
 
  return (
    <HeaderContainer>
      <HeaderContent>

        <NavLink to='/' title='home'>
          <Logo />
        </NavLink>


        <ButtonsContent>

          <Address>
            <MapPin size={22} weight="fill" />
            <p>Uberlândia, MG</p>
          </Address>

          <CartContent>
            <NavLink to='/cart' title='checkout'>
              <CartButton backgroundColor={'yellow-200'} iconColor={'yellow-700'} />
            </NavLink>
            {pedidos.length > 0 && <label>{pedidos.length}</label>}
          </CartContent>
        </ButtonsContent>

      </HeaderContent>
    </HeaderContainer>
  )
}