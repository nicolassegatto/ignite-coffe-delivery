import styled from "styled-components";
import { defaultTheme, ThemeInterface } from "../../styles/themes/default";

interface PropsInterface extends React.HTMLAttributes<HTMLElement> {
  theme: ThemeInterface;
  backColor: keyof typeof defaultTheme;
  iconColor: keyof typeof defaultTheme;
}

export const CartButtonStyle = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 2.375rem;
  height: 2.375rem;
  background-color: ${(props: PropsInterface) => props.theme[props.backColor]};
  color: ${(props: PropsInterface) => props.theme[props.iconColor]};
  border-radius: 0.375rem;
  border: none;
  padding: 0.5rem;
`

export const CartBallStyle = styled.div`
  
  background-color: ${(props) => props.theme['yellow-700']};
  color: ${(props) => props.theme['gray-0']};
  border-radius: 50%;
  min-width: 2rem;
  min-height: 2rem;
  max-width: 2rem;
  max-height: 2rem;
  display: flex;
  flex:1;
  align-items: center;
  justify-content: center;
`

export const PackageBallStyle = styled.div`
  background-color: ${(props) => props.theme['gray-700']};
  color: ${(props) => props.theme['gray-0']};
  border-radius: 50%;
  min-width: 2rem;
  min-height: 2rem;
  max-width: 2rem;
  max-height: 2rem;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const TimerBallStyle = styled.div`
  background-color: ${(props) => props.theme['yellow-500']};
  color: ${(props) => props.theme['gray-0']};
  border-radius: 50%;
  min-width: 2rem;
  min-height: 2rem;
  max-width: 2rem;
  max-height: 2rem;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const CoffeBallStyle = styled.div`
  background-color: ${(props) => props.theme['purple-500']};
  color: ${(props) => props.theme['gray-0']};
  border-radius: 50%;
  min-width: 2rem;
  min-height: 2rem;
  max-width: 2rem;
  max-height: 2rem;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const MapPinBallStyle = styled.div`
  background-color: ${(props) => props.theme['purple-500']};
  color: ${(props) => props.theme['gray-0']};
  border-radius: 50%;
  min-width: 2rem;
  min-height: 2rem;
  max-width: 2rem;
  max-height: 2rem;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const MoneyBallStyle = styled.div`
  background-color: ${(props) => props.theme['yellow-700']};
  color: ${(props) => props.theme['gray-0']};
  border-radius: 50%;
  min-width: 2rem;
  min-height: 2rem;
  max-width: 2rem;
  max-height: 2rem;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
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

export const RemoveButtonCart = styled.button`
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
  color: ${(props) => props.theme["gray-700"]};
  background-color: ${(props) => props.theme["gray-400"]};
  border: none;
  padding: 0 1rem;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover{
    opacity: 0.7;
  }
`

export const ButtonCheckoutContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme["yellow-500"]};
  border-radius: 0.5rem;
  padding: 0.75rem 0.5rem;
  color: ${(props) => props.theme["gray-0"]};
  &:hover{
    background-color: ${(props) => props.theme["yellow-700"]};
  }
`