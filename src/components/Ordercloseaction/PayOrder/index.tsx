import { currencyFormat } from '../../../helpers/currencyFormat'
import { useCart } from '../../../Hooks/useCart'
import { Container } from '../styles'

export default function PayOrder() {
  const { cart } = useCart()

  const totalAmount = cart.reduce((acc, item) => (acc += item.subtotal), 0)

  return (
    <Container>
      <button type='submit'>Pagar</button>
      <span>
        Total <strong>{currencyFormat(totalAmount)}</strong>
      </span>
    </Container>
  )
}
