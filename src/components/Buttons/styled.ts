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