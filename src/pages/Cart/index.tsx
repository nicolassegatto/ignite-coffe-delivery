import { AddressPaymentContainer, BagCheckoutContainer, CartContainer } from "./styled";

export function Cart() {
  return (
    <CartContainer>
      
      <AddressPaymentContainer>
        <div>
          <h2>Complete seu pedido</h2>
        </div>

        <div>
          <div>
            <h3>Endereço de Entrega</h3>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>

          <form>
            <div>
              <input type="text" placeholder="CEP" required />
            </div>
            <div>
              <input type="text" placeholder="Rua" required />
            </div>
            <div>
              <input type="text" placeholder="Número" required />
              <input type="text" placeholder="Complemento" required={false} />
            </div>
            <div>
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="UF" />
            </div>
          </form>

        </div>

        <div>

          <div>
            <h3>Pagamento</h3>
            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
          </div>

          <div>
            <form>
              <div>
                <input type="radio" id="creditCard" />
                <label htmlFor="creditCard">CARTÃO DE CRÉDITO</label>
              </div>
              <div>
                <input type="radio" id="debitCard" />
                <label htmlFor="debitCard">CARTÃO DE DÉBITO</label>
              </div>
              <div>
                <input type="radio" id="money" />
                <label htmlFor="money">DINHEIRO</label>
              </div>
            </form>
          </div>

        </div>

      </AddressPaymentContainer>

      <BagCheckoutContainer>

        <div>
          <h2>Cafés selecionados</h2>
        </div>

        <div>

          <div>
            <img src="" alt="cafe" />
            <div>
              <p>MODELO CAFE</p>
              <div>
                <div>
                  <button>-</button>
                  <label>1</label>
                  <button>+</button>
                </div>
                <button>Remover</button>
              </div>
            </div>
            <p>R$9,90</p>
          </div>

          <div>
            <div>
              <p>Total de itens</p>
              <p>R$29,70</p>
            </div>
            <div>
              <p>Entrega</p>
              <p>R$3,50</p>
            </div>
            <div>
              <p>Total</p>
              <p>R$33,20</p>
            </div>
          </div>

          <div>
            <button>Confirmar Pedido</button>
          </div>

        </div>

      </BagCheckoutContainer>

    </CartContainer>
  )
}