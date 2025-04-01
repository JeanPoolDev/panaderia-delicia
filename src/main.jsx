import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Panderia } from './Panaderia'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Panderia />
  </StrictMode>,
)
