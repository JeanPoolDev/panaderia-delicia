import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'

import { Panderia } from './Panaderia'

import './index.css'
import { PanProvider } from './context'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PanProvider>
        <Panderia />
      </PanProvider>
    </BrowserRouter>
  </StrictMode>,
)