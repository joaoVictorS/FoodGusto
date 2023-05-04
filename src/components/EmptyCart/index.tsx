import { Container, Button } from './styles'

import manAndBurguer from '../../assets/man-and-burger.svg'

interface EmptyCartProps {
  title: string
}

export default function EmptyCart({ title }: EmptyCartProps) {
  return (
    <Container>
      <h2>{title}</h2>
      <Button to='/'>Checar cardapio</Button>
      <img src={manAndBurguer} alt='Homem com Hamburguer' />
    </Container>
  )
}
