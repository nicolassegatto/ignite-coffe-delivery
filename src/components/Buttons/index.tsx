import {ShoppingCart, Timer, Package, Coffee} from "phosphor-react";
import { defaultTheme } from "../../styles/themes/default";
import {CartBallStyle, CartButtonStyle, CoffeBallStyle, PackageBallStyle, TimerBallStyle } from "./styled";

interface CartButtonColorType {
  backgroundColor: keyof typeof defaultTheme
  iconColor: keyof typeof defaultTheme
}

export function CartButton({backgroundColor, iconColor}: CartButtonColorType) {
  return (
    <CartButtonStyle backColor={backgroundColor} iconColor={iconColor}>
      <ShoppingCart size={22} weight="fill" />
    </CartButtonStyle>
  )
}

export function CartBall() {
  return (
    <CartBallStyle>
      <ShoppingCart size={16} weight="fill" />
    </CartBallStyle>
  )
}

export function PackageBall() {
  return (
    <PackageBallStyle>
      <Package size={16} weight="fill" />
    </PackageBallStyle>
  )
}

export function TimerBall() {
  return (
    <TimerBallStyle>
      <Timer size={16} weight="fill" />
    </TimerBallStyle>
  )
}

export function CoffeBall() {
  return (
    <CoffeBallStyle>
      <Coffee size={16} weight="fill" />
    </CoffeBallStyle>
  )
}