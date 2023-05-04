import ConfirmOrder from '../../../components/ConfirmOrder'
import { useCart } from '../../../hooks/useCart'
import TableDesktop from './TableDesktop'

export default function Table() {
  const { cart } = useCart()

  if (cart.length === 0) return <h1>Ops parece que voce não tem pedidos, peça já</h1>
  return (
    <>
      <TableDesktop />
      <ConfirmOrder />
    </>
  )
}
