import { Suspense, lazy, useEffect, useRef } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import PageSpinner from "./components/PageSpinner/PageSpinner"
import PlayPage from "./pages/PlayPage/PlayPage"

const HomePage = lazy(() => import('./pages/HomePage'))
const HelperMenu = lazy(() => import('./containers/HelperMenu'))
const MainMenu = lazy(() => import('./pages/MainMenuPage/MainMenu'))

function App() {

  const bodyRef = useRef<HTMLElement>(document.body)
  useEffect(() => {
    window.addEventListener('keypress', (e: KeyboardEvent) => {
      if((e.key === 'f' || e.key === 'F') && document.fullscreenElement) {
        document.exitFullscreen()
      } else if((e.key === 'f' || e.key === 'F') && !document.fullscreenElement) {
        bodyRef.current.requestFullscreen()
        bodyRef.current.style.overflow = 'auto';
      }
    })
  }, [])

  return(
    <BrowserRouter>
      <HelperMenu /> 
      <Suspense fallback={<PageSpinner />}>   
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/main-menu" element={<MainMenu/>}/>
          <Route path="/play-game/:id" element={<PlayPage/>}/>
        </Routes> 
      </Suspense>
    </BrowserRouter>
  )
}

export default App