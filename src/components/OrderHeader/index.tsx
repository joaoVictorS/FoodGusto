import { Link } from 'react-router-dom'

import { useCart } from '../../hooks/useCart'

import { Container } from './styles'

import logoImg from '../../assets/logo.svg'
import { ReactComponent as CardIcon } from '../../assets/shopping-cart.svg'

export default function OrderHeader() {
  const { cart } = useCart()
  return (
    <Container>
      <Link to={'/'}>
        <img src={logoImg} alt='' />
      </Link>
      <div>
        <div>
          <h3>Meus Pedidos</h3>
          <span>
            <strong>{`${cart.length}`.padStart(2, '0')}</strong> Lanche(s)
          </span>
        </div>
        <CardIcon />
      </div>
    </Container>
  )
}
