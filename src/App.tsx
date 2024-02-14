import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import TheAudio from "./components/Audio/TheAudio"

function App() {
  return(
    <BrowserRouter>
      <TheAudio />    
      <Routes>
        <Route path="/" element={<HomePage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App