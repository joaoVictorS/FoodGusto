import { createContext, useEffect, useState } from 'react'

import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './routes'

import { Theme } from './styles/Theme'
import { GlobalStyle } from './styles/global'
import { Normalize } from 'styled-normalize'
import { SnackData } from './interfaces/SnackData'
import { getBurguers, getDrinks, getIceCreams, getPizzas } from './services/api'

interface SnackContextProps {
  burgers: SnackData[]
  pizzas: SnackData[]
  drinks: SnackData[]
  iceCreams: SnackData[]
}

export const SnackContext = createContext({} as SnackContextProps)

export default function App() {
  const [burgers, setBurguers] = useState<SnackData[]>([])
  const [pizzas, setPizzas] = useState<SnackData[]>([])
  const [drinks, setDrinks] = useState<SnackData[]>([]);
  const [iceCreams, setIcecream] = useState<SnackData[]>([])

  useEffect(() => {
    ;(async () => {
      const burguerRequest = await getBurguers()
      const pizzasRequest = await getPizzas()
      const drinksRequest = await getDrinks()
      const iceCreamRequest = await getIceCreams()

      setBurguers(burguerRequest.data)
      setPizzas(pizzasRequest.data)
      setDrinks(drinksRequest.data)
      setIcecream(iceCreamRequest.data)
    })()
  }, [])

  return (
    <BrowserRouter>
      <Theme>
        <SnackContext.Provider value={{ burgers, pizzas, drinks, iceCreams }}>
          <AppRoutes />
          <GlobalStyle />
          <Normalize />
        </SnackContext.Provider>
      </Theme>
    </BrowserRouter>
  )
}
