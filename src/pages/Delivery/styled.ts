import styled from "styled-components";

export const DeliveryContainer = styled.div`
  display: flex;
  max-width: 1440px;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
  gap: 5rem;
  margin-top: 2rem;
`

export const DeliveryDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const DeliveryDetailsTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h2{
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme["yellow-700"]};
  }

  p{
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;
  }

`

export const DeliveryDetailsAtributtes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 0.375rem 2.25rem;
  border: solid 0.0625rem ${(props) => props.theme["yellow-500"]};
  padding: 2.5rem;

  div{
    display: flex;
    gap: 0.75rem;
    font-size: 1rem;
    

    div{
      display: flex;
      flex-direction: column;
      
      span{
        color: ${(props) => props.theme["gray-700"]};
      }
    }
  }
`

export const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;
  font-family: 'Baloo 2';
  color: ${(props) => props.theme["gray-600"]}
`