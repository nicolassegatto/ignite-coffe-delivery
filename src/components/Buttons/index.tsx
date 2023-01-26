import { ShoppingCart, Timer, Package, Coffee, Minus, Plus, Trash } from "phosphor-react";
import { defaultTheme } from "../../styles/themes/default";
import { ButtonCheckoutContent, CartBallStyle, CartButtonStyle, CoffeBallStyle, ItensSelector, PackageBallStyle, RemoveButtonCart, TimerBallStyle } from "./styled";

interface CartButtonColorType {
  backgroundColor: keyof typeof defaultTheme
  iconColor: keyof typeof defaultTheme
}

export function CartButton({ backgroundColor, iconColor }: CartButtonColorType) {
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

export function ItensQTDController() {
  return (
    <ItensSelector>
      <button><Minus size={18} weight={"bold"} /></button>
      <label>5</label>
      <button><Plus size={18} weight={"bold"} /></button>
    </ItensSelector>
  )
}

export function RemoveButton() {
  return (
    <RemoveButtonCart>
      <Trash size={16} color={`${defaultTheme["purple-500"]}`}/> REMOVER
    </RemoveButtonCart>
  )
}

export function ButtonCheckout() {
  return (
    <ButtonCheckoutContent>CONFIRMAR PEDIDO</ButtonCheckoutContent>
  )
}