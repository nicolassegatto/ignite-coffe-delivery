import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { ButtonCheckout, ItensQTDController, RemoveButton } from "../../components/Buttons";
import { defaultTheme } from "../../styles/themes/default";
import { AddressPaymentContainer, AddressPaymentDelivery, AddressPaymentDeliveryForm, AddressPaymentDeliveryTitle, AddressPaymentMethod, AddressPaymentMethodForm, AddressPaymentMethodTitle, AddressPaymentTitle, BagCheckoutCard, BagCheckoutContainer, BagCheckoutItem, BagCheckoutItemControllers, BagCheckoutItemControllersContent, BagCheckoutTitle, CartContainer, CheckoutPriceContent, CheckoutPriceValue } from "./styled";



export function Cart() {

  const navigate = useNavigate()

  const handlerConfirmCheckout = () => {
    let path = `/delivery`
    navigate(path)
  }

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
            

            
              <input type="radio" name="paymentMethod" id="debitCard" value={'debitCard'}/>
              <label htmlFor="debitCard">
                <Bank size={16} color={`${defaultTheme["purple-500"]}`} />CARTÃO DE DÉBITO
              </label>
            

            
              <input type="radio" name="paymentMethod" id="money" value={'money'}/>
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

          <BagCheckoutItem>
            <img src="http://localhost:5173/img/products/1.svg" alt="cafe" />
            <BagCheckoutItemControllers>
              <p>Expresso Tradicional</p>
              <BagCheckoutItemControllersContent>
                <ItensQTDController />
                <RemoveButton />
              </BagCheckoutItemControllersContent>
            </BagCheckoutItemControllers>
            <p>R$9,90</p>
          </BagCheckoutItem>

          <CheckoutPriceContent>
            <div>
              <p>Total de itens</p>
              <CheckoutPriceValue>R$29,70</CheckoutPriceValue>
            </div>
            <div>
              <p>Entrega</p>
              <CheckoutPriceValue>R$3,50</CheckoutPriceValue>
            </div>
            <div>
              <p>Total</p>
              <p>R$33,20</p>
            </div>
          </CheckoutPriceContent>

          <button onClick={handlerConfirmCheckout}><ButtonCheckout /></button>

        </BagCheckoutCard>

      </BagCheckoutContainer>

    </CartContainer>
  )
}