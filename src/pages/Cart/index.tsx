import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Storefront } from "phosphor-react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ButtonCheckout, ItensQTDController, RemoveButton } from "../../components/Buttons";
import { DemandContext } from "../../context/DemandContext";
import { defaultTheme } from "../../styles/themes/default";
import { AddressDelivery, AddressDeliveryBox, AddressPaymentContainer, AddressPaymentDeliveryForm, AddressPaymentDeliveryTitle, AddressPaymentMethod, AddressPaymentMethodDiv, AddressPaymentMethodTitle, AddressPaymentTitle, BagCheckoutCard, BagCheckoutContainer, BagCheckoutItem, BagCheckoutItemControllers, BagCheckoutItemControllersContent, BagCheckoutItems, BagCheckoutTitle, CartContainer, CheckoutPriceContent, CheckoutPriceValue, EmpityCart } from "./styled";

export function Cart() {

  const {register, handleSubmit} = useForm();

  const {pedidos, totalPrice, deliveryPrice, removePedido, updateItemQuantity, insertAddress} = useContext(DemandContext)

  if (pedidos.length > 0) {
    return (
      <CartContainer>
        <AddressPaymentContainer>
          <AddressPaymentTitle>
            <h2>Complete seu pedido</h2>
          </AddressPaymentTitle>

          <AddressPaymentDeliveryForm id="delivery" onSubmit={handleSubmit((data) => insertAddress(data))}>
            <AddressDeliveryBox>
              <AddressPaymentDeliveryTitle>
                <h3><MapPinLine size={24} color={`${defaultTheme["yellow-700"]}`} />  Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </AddressPaymentDeliveryTitle>

              <AddressDelivery>
                <div>
                  <input placeholder="CEP" {...register("CEP",{required:true})} />
                </div>
                <div>
                  <input placeholder="Rua" {...register("RUA",{required:true})} />
                </div>
                <div>
                  <input {...register("NUMERO",{required:true})} placeholder="Número"  />
                  <input {...register("COMPLEMENTO")} placeholder="Complemento"/>
                </div>
                <div>
                  <input {...register("BAIRRO",{required:true})}  placeholder="Bairro" />
                  <input {...register("CIDADE",{required:true})}  placeholder="Cidade" />
                  <input {...register("ESTADO",{required:true})}  placeholder="UF" />
                </div>
              </AddressDelivery>
            </AddressDeliveryBox>

            <AddressPaymentMethod>
              <AddressPaymentMethodTitle>
                <h3><CurrencyDollar size={24} color={`${defaultTheme["purple-500"]}`} /> Pagamento</h3>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </AddressPaymentMethodTitle>

              <AddressPaymentMethodDiv>

                <input type="radio" {...register("PAGAMENTO",{required:true})} id="creditCard" value={'Cartão de crédito'}  />
                <label htmlFor="creditCard">
                  <CreditCard size={16} color={`${defaultTheme["purple-500"]}`} />CARTÃO DE CRÉDITO
                </label>

                <input type="radio" {...register("PAGAMENTO",{required:true})} id="debitCard" value={'Cartão de débito'}  />
                <label htmlFor="debitCard">
                  <Bank size={16} color={`${defaultTheme["purple-500"]}`} />CARTÃO DE DÉBITO
                </label>

                <input type="radio" {...register("PAGAMENTO",{required:true})} id="money" value={'Dinheiro'}  />
                <label htmlFor="money">
                  <Money size={16} color={`${defaultTheme["purple-500"]}`} />DINHEIRO
                </label>

              </AddressPaymentMethodDiv>
            </AddressPaymentMethod>
          </AddressPaymentDeliveryForm>
        </AddressPaymentContainer>

        <BagCheckoutContainer>

          <BagCheckoutTitle>
            <h2>Cafés selecionados</h2>
          </BagCheckoutTitle>

          <BagCheckoutCard>

            <BagCheckoutItems>
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
                        <ItensQTDController qtd={pedido.quantity} updateItensQtd={updateItensQtd} />
                        <RemoveButton handlerRemoveItem={handlerRemoveItem} />
                      </BagCheckoutItemControllersContent>
                    </BagCheckoutItemControllers>
                    <p>{pedido.price.toFixed(2)} <i>unit.</i></p>
                  </BagCheckoutItem>
                )
              })}
            </BagCheckoutItems>

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

            <button type="submit" form="delivery"><ButtonCheckout /></button>

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