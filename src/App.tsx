import { RouterProvider } from "react-router-dom"

import { AppContainer } from "./app/styles/styledComponents"

import './app/styles/reset.css'
import { router } from "./app/AppRouter"
import { Loading } from "./shared/ui"

function App() {
  return (
    <AppContainer>
      <RouterProvider router={router} fallbackElement={<Loading />} />
    </AppContainer>
  )
}

export default App
