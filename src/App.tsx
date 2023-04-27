import { createContext, useEffect, useState } from 'react'

import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './routes'

import { Theme } from './styles/Theme'
import { GlobalStyle } from './styles/global'
import { Normalize } from 'styled-normalize'
import { SnackData } from './interfaces/SnackData'
import { getBurguers } from './services/api'

interface SnackContextProps {
  burgers: SnackData[]
  // pizzas: SnackData[]
  // drinks: SnackData[]
  // iceCreams: SnackData[]
}

export const SnackContext = createContext({} as SnackContextProps)

export default function App() {
  const [burgers, setBurguers] = useState<SnackData[]>([])

  useEffect(() => {
    ;(async () => {
      const burguerRequest = await getBurguers()

      setBurguers(burguerRequest.data)
    })()
  }, [])

  return (
    <BrowserRouter>
      <Theme>
        <SnackContext.Provider value={{ burgers }}>
          <AppRoutes />
          <GlobalStyle />
          <Normalize />
        </SnackContext.Provider>
      </Theme>
    </BrowserRouter>
  )
}
