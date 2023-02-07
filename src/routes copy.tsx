import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import BurguersPage from './pages/Main/Burguers'
import PizzasPage from './pages/Main/Pizzas'
import DrinksPage from './pages/Main/Drinks'
import IceCreamsPage from './pages/Main/IceCreams'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} >
        asd
      <Route path='/' element={<BurguersPage />} />
      <Route path='pizzas' element={<PizzasPage />} />
      <Route path='drinks' element={<DrinksPage />} />
      <Route path='ice-cream' element={<IceCreamsPage />} />
      </Route>
    </Routes>
  )
}
