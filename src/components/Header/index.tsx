import { MapPin } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { CartButton } from "../Buttons";
import { Logo } from "../Logo";
import { Address, ButtonsContent, CartContent, HeaderContainer, HeaderContent } from "./styled";

interface cartItensType {
  itens: number | undefined
}

export function Header({ itens }: cartItensType) {
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
            {itens && <label>{itens}</label>}
          </CartContent>
        </ButtonsContent>

      </HeaderContent>
    </HeaderContainer>
  )
}