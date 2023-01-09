import styled from "styled-components";

export const CardContainer = styled.div`

`

export const CardDesign = styled.div`
  background-color: ${(props) => props.theme['gray-200']};
  border-radius: 0.375rem 2.25rem;
  width: 16rem;
  height: 19.375rem;
`

export const CardInfo = styled.div`

  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding-bottom: 2rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`

export const ImageAtrributes = styled.div`

  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  margin-top: -2rem;
  
  img{
    max-width: 7.5rem;
    max-height: 7.5rem;
  }

  p{
    display: flex;
    gap: 0.25rem;

    label{
      font-size: 0.625rem;
      font-weight: bold;
      border-radius: 2rem;
      background-color: ${(props) => props.theme['yellow-200']};
      color: ${(props) => props.theme['yellow-700']};
      padding: 0.25rem 0.5rem;
    }
  }

`

export const TitleDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  margin-top: -2rem;
  
  h2{
    font-family: 'Baloo 2', cursive;
    line-height: 130%;
    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme['gray-900']};
  }

  p{
    font-family: 'Roboto', sans-serif;
    text-align: center;
    line-height: 130%;
    font-weight: 400;
    font-size: 0.875rem;
    align-items: center;
    color: ${(props) => props.theme['gray-600']};
  }
`

export const PriceItens = styled.div` 
  display: flex;
  justify-content: space-between;
  align-items:center;
  p{
    font-family: 'Baloo 2', cursive;
    line-height: 130%;
    font-weight: 800;
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-700']};
    
    label{
      font-family: 'Roboto', sans-serif;
      line-height: 130%;
      font-weight: 400;
      font-size: 0.875rem;
      margin-right: 0.25rem;
    }
  }
` 

export const ItenSelectorAndCartButotn = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const ItensSelector = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme['gray-400']};
  border-radius: 0.5rem;
  height: 2.375rem;

  button{
    border: none;
    background-color: transparent;
    color: ${(props) => props.theme['purple-500']};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0.25rem;
    cursor: pointer;
  }

  label{
    padding: 0 0.25rem;
    color: ${(props) => props.theme['gray-900']};
    font-size: 1rem;
  }
`

export const CardButtonCart = styled.div`
  button{
    border: none
  }
`

