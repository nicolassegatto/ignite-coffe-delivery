import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* :focus {
    outline: 0;
    box-shadow: 0 0 0 0.125rem ${(props) => props.theme['gray-500']}
  } */

  body{
    background: ${(props) => props.theme['gray-100']};
    color: ${(props) => props.theme['gray-700']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.125rem;
  }

  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme['gray-200']};
  }

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme['yellow-200']};
    border-radius: 0.5rem;
  }
`