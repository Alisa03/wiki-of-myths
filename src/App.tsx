import { BrowserRouter as Router } from "react-router-dom"

import AppRouter from "./AppRouter"

import { AppContainer } from "./assets/styles/styledComponents"
import GlobalStyled from "./assets/styles/GlobalStyled"
import Header from "./components/layout/Header"

function App() {

  return (
    <Router>
      <AppContainer>
        <GlobalStyled />
        <Header />
        <AppRouter />
      </AppContainer>
    </Router>
  )
}

export default App
