import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
interface DemandContextPropsTypes {
  children: ReactNode
}

interface PedidosType {
  id: string
  name: string
  price: number
  quantity: number
}

export interface AddresssDeliveryType {
  CEP: string;
  RUA: string;
  NUMERO: string;
  COMPLEMENTO?: string;
  BAIRRO: string;
  CIDADE: string;
  ESTADO: string;
  PAGAMENTO: string
} 


interface DemandContextType {
  pedidos: PedidosType[]
  deliveryPrice: number
  totalPrice: number
  address: AddresssDeliveryType
  novoPedido: (data: PedidosType) => void
  removePedido: (id: string) => void
  updateItemQuantity: (id: string, qtd: number) => void
  insertAddress:(data:any) => void
}

export const DemandContext = createContext({} as DemandContextType)
export function DemandContextProvider({ children }: DemandContextPropsTypes) {

  const navigate = useNavigate()

  const redirectDeliveryPage = () => {
    let path = `/delivery`
    navigate(path)
  }

  const [pedidos, setPedidos] = useState<PedidosType[]>([])
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const [deliveryPrice, setDeliveryPrice] = useState<number>(0)
  const [address, setAddress] = useState<AddresssDeliveryType>({
    BAIRRO : "",
    CEP: "",
    CIDADE: "",
    ESTADO: "",
    NUMERO: "",
    PAGAMENTO: "",
    RUA: ""
  })

  function novoPedido(pedido: PedidosType) {
    let temp = [...pedidos]


    if (temp.find(OBJ => OBJ.id === pedido.id)) {
        
      let pos = temp.findIndex(OBJ => OBJ.id === pedido.id)
      temp[pos].quantity = temp[pos].quantity + pedido.quantity

    }else{
      temp = [...temp, pedido]
    }

    setPedidos(temp)
  }

  function removePedido(id: string) {
    let temp = pedidos.filter(PEDIDO => {
      return PEDIDO.id !== id
    })
    setPedidos(temp)
  }

  function updateItemQuantity(id: string, qtd: number) {
    if (qtd > 0) {
      let temp = pedidos.filter(PEDIDO => {
        if (PEDIDO.id === id) {
          PEDIDO.quantity = qtd
        }
        return PEDIDO
      })
      setPedidos(temp)
    }
  }

  function resetCart(){
    setPedidos([])
  }

  function insertAddress (data:AddresssDeliveryType) {
    setAddress(data)
    resetCart()
    redirectDeliveryPage()
  }

  useEffect(() => {
    pedidos.length > 0 ? setDeliveryPrice(5.50) : setDeliveryPrice(0)
    setTotalPrice(pedidos.reduce((stepSum, demand) => {
      return stepSum + (demand.price * demand.quantity)
    }, 0))

  }, [pedidos, totalPrice])

  return (
    <DemandContext.Provider value={
      {
        pedidos,
        novoPedido,
        totalPrice,
        deliveryPrice,
        removePedido,
        updateItemQuantity,
        address,
        insertAddress
      }
    }>
      {children}
    </DemandContext.Provider>
  )
}