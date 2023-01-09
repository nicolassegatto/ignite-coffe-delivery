import { Minus, Plus } from "phosphor-react";
import { CartButton } from "../Buttons";
import { CardButtonCart, CardContainer, CardDesign, CardInfo, ImageAtrributes, ItenSelectorAndCartButotn, ItensSelector, PriceItens, TitleDescription } from "./styled";

interface CoffesResponseType {
  id: string;
  name: string;
  description: string;
  price: number;
  attributes: []
}

export function Card({ id, name, description, price, attributes }: CoffesResponseType) {
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
            <p><label>R$</label>{price}</p>
            <ItenSelectorAndCartButotn>
              <ItensSelector>
                <button><Minus size={18} weight={"bold"} /></button>
                <label>5</label>
                <button><Plus size={18} weight={"bold"} /></button>
              </ItensSelector>
              <CardButtonCart>
                <button><CartButton backgroundColor={'purple-800'} iconColor={'gray-0'} /></button>
              </CardButtonCart>
            </ItenSelectorAndCartButotn>
          </PriceItens>
        </CardInfo>
      </CardDesign>
    </CardContainer>
  )
}