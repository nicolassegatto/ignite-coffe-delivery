
import { useEffect, useState } from 'react';
import { Banner } from '../../components/Banner'
import { Card } from '../../components/Card'
import {FilterCoffes, HeaderProducts, HomeContainer, ProductsContainer, ProductsList, ProductsTitle} from './styled'

async function getCoffes() {
  let response = await fetch('http://localhost:5173/api/coffes.json')
  let data = await response.json(); 
  return data
}

interface CoffesResponseType {
  id: string;
  name: string;
  description: string;
  price: number;
  attributes: []
}[]

export function Home() {

  const [coffes, setCoffes] = useState<CoffesResponseType[]>([])

  useEffect(() => {
    getCoffes().then(data => {
      setCoffes(data["data"])
    })
  }, [])

  return (
    <HomeContainer>
     <Banner/>
      <ProductsContainer>
        <HeaderProducts>
          <ProductsTitle>
            <h2>
              Nossos cafés
            </h2>
          </ProductsTitle>
          <FilterCoffes>
            <button>TRADICIONAL</button>
            <button>ESPECIAL</button>
            <button>COM LEITE</button>
            <button>ALCOÓLICO</button>
            <button>GELADO</button>
          </FilterCoffes>
        </HeaderProducts>
        <ProductsList>
          {coffes.map(COFFE => {
            return(
              <Card 
                key={COFFE.id}
                id={COFFE.id}
                name={COFFE.name}
                description={COFFE.description}
                price={COFFE.price}
                attributes={COFFE.attributes}
              />
            )
          })}
        </ProductsList>
      </ProductsContainer>
    </HomeContainer>
  )
}