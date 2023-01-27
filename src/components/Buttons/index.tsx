import { ShoppingCart, Timer, Package, Coffee, Minus, Plus, Trash, MapPin, CurrencyDollar } from "phosphor-react";
import { defaultTheme } from "../../styles/themes/default";
import { ButtonCheckoutContent, CartBallStyle, CartButtonStyle, CoffeBallStyle, ItensSelector, MapPinBallStyle, MoneyBallStyle, PackageBallStyle, RemoveButtonCart, TimerBallStyle } from "./styled";

interface CartButtonColorType {
  backgroundColor: keyof typeof defaultTheme
  iconColor: keyof typeof defaultTheme
}

interface ItensQtdType {
  updateItensQtd: (data:number) => void
  qtd: number
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

export function MapPinBall() {
  return (
    <MapPinBallStyle>
      <MapPin size={16} weight="fill" />
    </MapPinBallStyle>
  )
}

export function MoneyBall() {
  return (
    <MoneyBallStyle>
      <CurrencyDollar size={16} weight="fill" />
    </MoneyBallStyle>
  )
}

export function ItensQTDController( {updateItensQtd, qtd}: ItensQtdType ) {

  function handlerRemoveQtd () {
    qtd > 0 && updateItensQtd(qtd-1)
  }

  function handlerAddQtd () {
    updateItensQtd(qtd+1)
  }

  return (
    <ItensSelector>
      <button onClick={handlerRemoveQtd}><Minus size={18} weight={"bold"} /></button>
      <label>{qtd}</label>
      <button onClick={handlerAddQtd}><Plus size={18} weight={"bold"} /></button>
    </ItensSelector>
  )
}


interface RemoveButtonType {
  handlerRemoveItem: () => void
}

export function RemoveButton({handlerRemoveItem} : RemoveButtonType) {

  return (
    <RemoveButtonCart onClick={handlerRemoveItem}>
      <Trash size={16} color={`${defaultTheme["purple-500"]}`}/> REMOVER
    </RemoveButtonCart>
  )
}

export function ButtonCheckout() {
  return (
    <ButtonCheckoutContent>CONFIRMAR PEDIDO</ButtonCheckoutContent>
  )
}