import styled from "styled-components";

export const HomeContainer = styled.main`
 display: flex;
 width: 100%;
 margin: 0 auto;
 flex-direction: column;
`
export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  width: 100%;
  padding: 6rem 2rem;
  margin: 0 auto;
`
export const HeaderProducts = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

`

export const ProductsTitle = styled.div`
  font-family: 'Baloo 2', cursive;
  line-height: 130%;
  font-weight: 700;
  font-size: 2rem;
  color: ${(props) => props.theme['gray-700']};
`

export const FilterCoffes = styled.div`
  display: flex;
  gap: 1rem;
  button{
    border: solid 0.125rem ${(props) => props.theme['yellow-500']};
    border-radius: 1rem;
    background-color: transparent;
    color: ${(props) => props.theme['yellow-500']};
    padding: 0.225rem 1rem;
    font-size: 0.625rem;
    font-weight: bold;
    cursor: pointer;
  }
`

export const ProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15.625rem, 1fr));
  grid-row-gap: 4rem;
  grid-column-gap: 4rem;
  padding-top: 4rem;
  justify-items: center;
  align-items: center;
`