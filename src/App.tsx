import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import HelperMenu from "./containers/HelperMenu"

function App() {
  return(
    <BrowserRouter>
      <HelperMenu />    
      <Routes>
        <Route path="/" element={<HomePage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App