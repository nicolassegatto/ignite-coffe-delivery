import { Storefront } from 'phosphor-react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import DeliveryBoy from '../../assets/deliveryBoy.svg'
import { MapPinBall, MoneyBall, TimerBall } from '../../components/Buttons'
import { DemandContext } from '../../context/DemandContext'
import { DeliveryContainer, DeliveryDetails, DeliveryDetailsAtributtes, DeliveryDetailsTitle, NotFound } from './styled'

export function Delivery() {
  const {address} = useContext(DemandContext)

  if(address.CEP && address.PAGAMENTO && address.ESTADO && address.BAIRRO && address.NUMERO && address.CIDADE){
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
                <span>Entrega em <strong>Rua {address.RUA}, {address.NUMERO}</strong></span>
                <span>{address.BAIRRO} - {address.CIDADE}, {address.ESTADO}</span>
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
                <span>Pagamento na entrega</span>
                <span><strong>{address.PAGAMENTO}</strong></span>
              </div>
            </div>
          </DeliveryDetailsAtributtes>
        </DeliveryDetails>
  
        <img src={DeliveryBoy} alt="motoBoy image" />
      </DeliveryContainer>
    )
  }else{
    return(
      <NotFound>
        <span><Storefront size={300}/></span>
        <span>Ei apressadinho, volte e faça seu pedido primeiro !</span>
      </NotFound>
    )
  }
  
}