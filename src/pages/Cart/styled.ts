import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  max-width: 1440px;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
`
export const AddressPaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const AddressPaymentTitle = styled.div`
  h2{
    font-family: 'Baloo 2', 'sans-serif';
    font-size: 1.125rem;
  }
`
export const AddressPaymentDelivery = styled.div`
  background-color: ${(props) => props.theme['gray-200']};
  border-radius: 0.5rem;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2.5rem;
`
export const AddressPaymentDeliveryTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  h3{
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    line-height:130%;
    color: ${(props) => props.theme["gray-800"]};
  };
  p{
    font-size: 0.875rem;
    color: ${(props) => props.theme["gray-700"]};
  }
`
export const AddressPaymentDeliveryForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  div{
    display: flex;
    gap: 1rem;

    input{
      border: 0.126rem solid ${(props) => props.theme["gray-400"]};
      background-color: ${(props) => props.theme["gray-300"]};
      padding: 0.75rem;
      border-radius: 0.5rem;
      font-size: 0.875rem;
      line-height: 130%;
      align-items: center;
      color: ${(props) => props.theme["gray-700"]};

      &:focus{
        outline-color: ${(props) => props.theme["yellow-700"]};
      }

      &::placeholder{
        color: ${(props) => props.theme["gray-600"]}
      }

    }

    :nth-child(2){
      display: flex;
      input{
        flex:1;
      }
    }

    :nth-child(3){
      display: flex;
      input{
        :nth-child(2){
          flex:1;
        }
      }
    }

    :nth-child(4){
      display: flex;
      input{
        :nth-child(2){
          flex:1;
        }
        :nth-child(3){
          width: 4rem;
        }
      }
    }

  }
`
export const AddressPaymentMethod = styled.div`
  background-color: ${(props) => props.theme['gray-200']};
  border-radius: 0.5rem;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
export const AddressPaymentMethodTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  h3{
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    line-height:130%;
    color: ${(props) => props.theme["gray-800"]};
  };
  p{
    font-size: 0.875rem;
    color: ${(props) => props.theme["gray-700"]};
  }
`
export const AddressPaymentMethodForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  input{
    display: none;
    
    :checked + label{
      color : ${(props) => props.theme["gray-900"]};
      outline: 0.125rem solid ${(props) => props.theme["purple-500"]};
      background-color: #EBE5F9 ;
    }
  }

  label{
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
    width: 11rem;
    padding: 1rem;
    border-radius: 0.5rem;
    font-size: 0.75rem;
    line-height: 130%;
    color: ${(props) => props.theme["gray-700"]};
    background-color: ${(props) => props.theme["gray-400"]};
  }
  

`
export const BagCheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const BagCheckoutTitle = styled.div`
  h2{
    font-family: 'Baloo 2', 'sans-serif';
    font-size: 1.125rem;
  }
`
export const BagCheckoutCard = styled.div`
  width: 28rem;
  background-color: ${(props) => props.theme['gray-200']};
  border-radius: 0.25rem 2.75rem;
  padding: 2.5rem;
  button{
    border: none;
    cursor: pointer;
    width: 100%;
  }
`
export const BagCheckoutItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.125rem solid ${(props) => props.theme["gray-300"]};
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  img{
    max-width: 4rem;
    max-height: 4rem;
  }
  p{
    font-weight: 700;
    line-height: 130%;
    font-size: 1rem;
    color: ${(props) => props.theme["gray-700"]};
  }
`
export const BagCheckoutItemControllers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  p{
    color: ${(props) => props.theme["gray-800"]};
    font-weight: 400;
  }
`
export const BagCheckoutItemControllersContent = styled.div`
  display: flex;
  gap: 0.5rem;
`
export const CheckoutPriceContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;

  div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.875rem;
    font-weight: 400;
    color: ${(props) => props.theme["gray-700"]};
    line-height: 130%;

    &:nth-last-child(1){
      font-size: 1.25rem;
      font-weight: 700;
      color: ${(props) => props.theme["gray-800"]};
      padding-bottom: 1rem;
    }
  }
`
export const CheckoutPriceValue = styled.p`
  font-size: 1rem;
`