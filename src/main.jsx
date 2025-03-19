import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  Loundry  from './components/Loundry.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Loundry/>
  </StrictMode>,
)
