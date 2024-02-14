import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import HelperMenu from "./containers/HelperMenu"
import MainMenu from "./pages/MainMenuPage/MainMenu"

function App() {
  return(
    <BrowserRouter>
      <HelperMenu />    
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/main-menu" element={<MainMenu/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App