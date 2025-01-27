import { Provider } from "./components/ui/provider"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/home'
import './styles.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <Home/>
    </Provider>
  </StrictMode>,
)
