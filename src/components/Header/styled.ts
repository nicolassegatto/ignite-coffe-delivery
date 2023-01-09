import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 6.5rem;
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-items: center;
  width: 70%;
  margin: 0 auto;
  div{
    display: flex;
  }

`

export const ButtonsContent = styled.div`
  display: flex;
  gap: 0.75rem;
`
export const Address = styled.button`
  height: 2.375rem;
  display: flex;
  gap: 0.25rem;
  flex: 1;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background-color: ${(props) => props.theme['purple-100']};
  color: ${(props) => props.theme['purple-500']};
  border-radius: 0.375rem;
  border: none;
  padding: 0.5rem;
  cursor: pointer;

  p{
    color: ${(props) => props.theme['purple-800']};
  }
`

export const CartContent = styled.div`

  label{
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 1rem;
    background-color: ${(props) => props.theme['yellow-700']};
    color: ${(props) => props.theme['gray-200']};
    font-size: 0.75rem;
    font-weight: bold;
    border: none;
    margin-top: -0.625rem;
    margin-left: -0.625rem;
  }
`