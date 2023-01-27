import { useContext, useState } from "react";
import { DemandContext } from "../../context/DemandContext";
import { CartButton, ItensQTDController } from "../Buttons";
import { CardButtonCart, CardContainer, CardDesign, CardInfo, ImageAtrributes, ItenSelectorAndCartButotn, PriceItens, TitleDescription } from "./styled";

interface CoffesResponseType {
  id: string;
  name: string;
  description: string;
  price: number;
  attributes: []
}

export function Card({ id, name, description, price, attributes }: CoffesResponseType) {

  const { novoPedido } = useContext(DemandContext)
  const [itensQtd, setItensQtd] = useState<number>(0)

  const updateItensQtd = (data: number) => { setItensQtd(data) }

  const newDemand = () => {
    itensQtd > 0 && novoPedido({
      id: id,
      name: name,
      price: price,
      quantity: itensQtd,
    });
    
    setItensQtd(0);
  }

  return (
    <CardContainer>
      <CardDesign>
        <CardInfo>
          <ImageAtrributes>
            <img src={`http://localhost:5173/img/products/${id}.svg`} alt="ilustração do café descrito" />
            <p>{attributes.map(ATTRIBUTE => { return (<label key={ATTRIBUTE}>{`${ATTRIBUTE}`.toUpperCase()}</label>) })}</p>
          </ImageAtrributes>
          <TitleDescription>
            <h2>{name}</h2>
            <p>{description}</p>
          </TitleDescription>
          <PriceItens>
            <p><label>R$</label>{price.toFixed(2)}</p>
            <ItenSelectorAndCartButotn>
              <ItensQTDController updateItensQtd={updateItensQtd} qtd={itensQtd} />
              <CardButtonCart>
                <button onClick={newDemand}><CartButton backgroundColor={'purple-800'} iconColor={'gray-0'} /></button>
              </CardButtonCart>
            </ItenSelectorAndCartButotn>
          </PriceItens>
        </CardInfo>
      </CardDesign>
    </CardContainer>
  )
}