import { RouterProvider } from "react-router-dom"

import { AppContainer } from "./styles/styledComponents"

import './styles/reset.css'

import { router } from "./AppRouter"

import { Loading } from "~/shared/ui"

function App() {
  return (
    <AppContainer>
      <RouterProvider router={router} fallbackElement={<Loading />} />
    </AppContainer>
  )
}

export default App