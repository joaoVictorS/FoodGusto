import { useState, useEffect } from 'react'
import { useCart } from '../../../hooks/useCart'
import TableDesktop from './TableDesktop'
import TableMobile from './TableMobile'

export default function Table() {
  const [windowWidth, setWindowWidth] = useState(document.documentElement.clientWidth)

  const { cart } = useCart()

  useEffect(() => {
    function updateTableComponentBasedWindowWidth() {
      const currentWidth = document.documentElement.clientWidth
      setWindowWidth(currentWidth)
    }
    window.addEventListener('resize', updateTableComponentBasedWindowWidth)

    return () => {
      window.removeEventListener('resize', updateTableComponentBasedWindowWidth)
    }
  }, [windowWidth])

  if (cart.length === 0) return <h1>Ops parece que voce não tem pedidos, peça já </h1>

  return windowWidth > 768 ? <TableDesktop /> : <TableMobile />
}
