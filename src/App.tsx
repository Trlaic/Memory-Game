import { Suspense, lazy } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import PageSpinner from "./components/PageSpinner/PageSpinner"

const HomePage = lazy(() => import('./pages/HomePage'))
const HelperMenu = lazy(() => import('./containers/HelperMenu'))
const MainMenu = lazy(() => import('./pages/MainMenuPage/MainMenu'))

function App() {
  return(
    <BrowserRouter>
      <HelperMenu /> 
      <Suspense fallback={<PageSpinner />}>   
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/main-menu" element={<MainMenu/>}/>
        </Routes> 
      </Suspense>
    </BrowserRouter>
  )
}

export default App