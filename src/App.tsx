import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from './styles/themes/default';
import { DemandContextProvider } from "./context/DemandContext";

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>

      <DemandContextProvider>
        <Router />
      </DemandContextProvider>
      
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
