import { createContext, ReactNode, useEffect, useState } from "react";
interface DemandContextPropsTypes {
  children: ReactNode
}

interface PedidosType {
  id: string
  name: string
  price: number
  quantity : number
}

interface DemandContextType {
  pedidos: PedidosType[]
  deliveryPrice: number
  totalPrice: number
  novoPedido: (data: PedidosType) => void
  removePedido: (id: string) => void
  updateItemQuantity: (id: string, qtd: number) =>void
}


export const DemandContext = createContext({} as DemandContextType)
export function DemandContextProvider({children}:DemandContextPropsTypes) {

  const [pedidos, setPedidos] = useState<PedidosType[]>([])
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const [deliveryPrice, setDeliveryPrice] = useState<number>(0)

  function novoPedido ( pedido: PedidosType) {
    setPedidos([...pedidos, pedido])
  }

  function removePedido (id:string) {
    let temp = pedidos.filter(PEDIDO => {
      return PEDIDO.id !== id
    })
    setPedidos(temp)
  }

  function updateItemQuantity (id:string, qtd:number) {
    if(qtd > 0  ){
      let temp = pedidos.filter(PEDIDO => {
        if(PEDIDO.id === id) {
          PEDIDO.quantity = qtd
        }
        return PEDIDO
      })
      setPedidos(temp)
    }
  }

  useEffect(()=> {
    pedidos.length > 0 ? setDeliveryPrice(5.50) : setDeliveryPrice(0)
    setTotalPrice(pedidos.reduce((stepSum, demand) => {
      return stepSum + (demand.price*demand.quantity)
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
        updateItemQuantity
      }
    }>
      {children}
    </DemandContext.Provider>
  )
}