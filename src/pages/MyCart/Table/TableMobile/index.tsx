import { currencyFormat } from '../../../../helpers/currencyFormat'
import { useCart } from '../../../../Hooks/useCart'

import plusImg from '../../../../assets/circle-plus.svg'
import minusImg from '../../../../assets/circle-minus.svg'

import { Container } from './styles'
import { FaTrashAlt } from 'react-icons/fa'
import ConfirmOrder from '../../../../components/Ordercloseaction/ConfirmOrder'

export default function TableMobile() {
  const { cart, removeSnackFromCart, snackCarIncrement, snackCarDecrement } = useCart()

  return (
    <Container>
      {cart.map((item) => (
        <div key={`${item.snack}-${item.id}`} className='order-item'>
          <div>
            <img src={item.image} alt={item.name} />
          </div>
          <div>
            <h4>{item.name}</h4>
            <span>{currencyFormat(item.price)}</span>
            <div>
              <div>
                <button type='button' onClick={() => snackCarDecrement(item)}>
                  <img src={minusImg} alt='Remover quantidade' />
                </button>
                <span>{`${item.quantity}`.padStart(2, '0')}</span>
                <button type='button' onClick={() => snackCarIncrement(item)}>
                  <img src={plusImg} alt='Adicionar quantidade' />
                </button>
              </div>
              <button type='button' onClick={() => removeSnackFromCart(item)}>
                <FaTrashAlt />
              </button>
            </div>
            <h5>
              <span>Subtotal</span> {currencyFormat(item.subtotal)}
            </h5>
          </div>
        </div>
      ))}

      <ConfirmOrder />
    </Container>
  )
}
