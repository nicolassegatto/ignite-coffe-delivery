import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Storefront } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonCheckout, ItensQTDController, RemoveButton } from "../../components/Buttons";
import { DemandContext } from "../../context/DemandContext";
import { defaultTheme } from "../../styles/themes/default";
import { AddressPaymentContainer, AddressPaymentDelivery, AddressPaymentDeliveryForm, AddressPaymentDeliveryTitle, AddressPaymentMethod, AddressPaymentMethodForm, AddressPaymentMethodTitle, AddressPaymentTitle, BagCheckoutCard, BagCheckoutContainer, BagCheckoutItem, BagCheckoutItemControllers, BagCheckoutItemControllersContent, BagCheckoutTitle, CartContainer, CheckoutPriceContent, CheckoutPriceValue, EmpityCart } from "./styled";

export function Cart() {

  const navigate = useNavigate()

  const handlerConfirmCheckout = () => {
    let path = `/delivery`
    navigate(path)
  }

  const { pedidos, totalPrice, deliveryPrice, removePedido, updateItemQuantity } = useContext(DemandContext)

  if (pedidos.length > 0) {
    return (
      <CartContainer>

        <AddressPaymentContainer>
          <AddressPaymentTitle>
            <h2>Complete seu pedido</h2>
          </AddressPaymentTitle>

          <AddressPaymentDelivery>
            <AddressPaymentDeliveryTitle>
              <h3><MapPinLine size={24} color={`${defaultTheme["yellow-700"]}`} />  Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </AddressPaymentDeliveryTitle>

            <AddressPaymentDeliveryForm>
              <div>
                <input type="text" name="CEP" placeholder="CEP" required />
              </div>
              <div>
                <input type="text" name="RUA" placeholder="Rua" required />
              </div>
              <div>
                <input type="text" name="NUMERO" placeholder="Número" required />
                <input type="text" name="COMPLEMENTO" placeholder="Complemento" required={false} />
              </div>
              <div>
                <input type="text" name="BAIRRO" placeholder="Bairro" />
                <input type="text" name="CIDADE" placeholder="Cidade" />
                <input type="text" name="ESTADO" placeholder="UF" />
              </div>
            </AddressPaymentDeliveryForm>

          </AddressPaymentDelivery>

          <AddressPaymentMethod>

            <AddressPaymentMethodTitle>
              <h3><CurrencyDollar size={24} color={`${defaultTheme["purple-500"]}`} /> Pagamento</h3>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </AddressPaymentMethodTitle>

            <AddressPaymentMethodForm>

              <input type="radio" name="paymentMethod" id="creditCard" value={'creditCard'} />
              <label htmlFor="creditCard">
                <CreditCard size={16} color={`${defaultTheme["purple-500"]}`} />CARTÃO DE CRÉDITO
              </label>



              <input type="radio" name="paymentMethod" id="debitCard" value={'debitCard'} />
              <label htmlFor="debitCard">
                <Bank size={16} color={`${defaultTheme["purple-500"]}`} />CARTÃO DE DÉBITO
              </label>



              <input type="radio" name="paymentMethod" id="money" value={'money'} />
              <label htmlFor="money">
                <Money size={16} color={`${defaultTheme["purple-500"]}`} />DINHEIRO
              </label>

            </AddressPaymentMethodForm>

          </AddressPaymentMethod>

        </AddressPaymentContainer>

        <BagCheckoutContainer>

          <BagCheckoutTitle>
            <h2>Cafés selecionados</h2>
          </BagCheckoutTitle>

          <BagCheckoutCard>

            {pedidos.map(pedido => {

              const updateItensQtd = (qtd: number) => {
                updateItemQuantity(pedido.id, qtd)
              }

              function handlerRemoveItem() {
                removePedido(pedido.id)
              }

              return (
                <BagCheckoutItem key={pedido.id}>
                  <img src={`http://localhost:5173/img/products/${pedido.id}.svg`} alt="cafe" />
                  <BagCheckoutItemControllers>
                    <p>{pedido.name}</p>
                    <BagCheckoutItemControllersContent>
                      <ItensQTDController qtd={pedido.quantity} updateItensQtd={updateItensQtd}  />
                      <RemoveButton handlerRemoveItem={handlerRemoveItem}/>
                    </BagCheckoutItemControllersContent>
                  </BagCheckoutItemControllers>
                  <p>{pedido.price.toFixed(2)} <i>unit.</i></p>
                </BagCheckoutItem>
              )
            })}


            <CheckoutPriceContent>
              <div>
                <p>Total de itens</p>
                <CheckoutPriceValue>R${totalPrice.toFixed(2)}</CheckoutPriceValue>
              </div>
              <div>
                <p>Entrega</p>
                <CheckoutPriceValue>{deliveryPrice.toFixed(2)}</CheckoutPriceValue>
              </div>
              <div>
                <p>Total</p>
                <p>R${(totalPrice + deliveryPrice).toFixed(2)}</p>
              </div>
            </CheckoutPriceContent>

            <button onClick={handlerConfirmCheckout}><ButtonCheckout /></button>

          </BagCheckoutCard>

        </BagCheckoutContainer>

      </CartContainer>
    )
  } else {
    return (
      <CartContainer>
        <EmpityCart>
          <span><Storefront size={250} /> </span>
          <span>Seu carrinho ainda está vazio</span>
          <span>Volte a página anterior e faça suas compras!</span>
        </EmpityCart>
      </CartContainer>
    )
  }



}