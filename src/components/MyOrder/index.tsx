import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import { Container } from './styles'
import { ReactComponent as CardIcon } from '../../assets/shopping-cart.svg'

export function MyOrder() {
  const { cart } = useCart()
  return (
    <>
      <Container to={'/cart'}>
        <span>Meu Pedido</span>
        <CardIcon />
        {cart.length != 0 && <span>{`${cart.length}`.padStart(2, '0')}</span>}
      </Container>
    </>
  )
}
