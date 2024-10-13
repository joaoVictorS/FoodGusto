import { useState, useEffect } from 'react'
import { useCart } from '../../../Hooks/useCart'
import TableDesktop from './TableDesktop'
import TableMobile from './TableMobile'
import EmptyCart from '../../../components/EmptyCart'

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

  if (cart.length === 0)
    return <EmptyCart title={'Ops! Parece que você não possui pedidos, peça já!'} />

  return windowWidth > 768 ? <TableDesktop /> : <TableMobile />
}
