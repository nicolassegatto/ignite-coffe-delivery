import DeliveryBoy from '../../assets/deliveryBoy.svg'
import { MapPinBall, MoneyBall, TimerBall } from '../../components/Buttons'
import { DeliveryContainer, DeliveryDetails, DeliveryDetailsAtributtes, DeliveryDetailsTitle } from './styled'

export function Delivery() {
  return (
    <DeliveryContainer>
      <DeliveryDetails>
        <DeliveryDetailsTitle>
          <h2>Uhu! Pedido confirmado</h2>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </DeliveryDetailsTitle>

        <DeliveryDetailsAtributtes>
          <div>
            <MapPinBall />
            <div>
              <span>Entrega em <strong>Rua João Daniel Martinelli, 102</strong></span>
              <span>Farrapos - Porto Alegre, RS</span>
            </div>
          </div>
          <div>
            <TimerBall />
            <div>
              <span>Previsão de entrega</span>
              <span><strong>20 min - 30 min</strong></span>
            </div>
          </div>
          <div>
            <MoneyBall />
            <div>
              <span>Pagamento na entrega Cartão de Crédito</span>
              <span><strong>Cartão de Crédito</strong></span>
            </div>
          </div>
        </DeliveryDetailsAtributtes>
      </DeliveryDetails>

      <img src={DeliveryBoy} alt="motoBoy image" />
    </DeliveryContainer>
  )
}