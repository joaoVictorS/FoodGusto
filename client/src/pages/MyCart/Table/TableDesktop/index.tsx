import { FaTrashAlt } from 'react-icons/fa'
import { useCart } from '../../../../Hooks/useCart'
import { currencyFormat } from '../../../../helpers/currencyFormat'

import plusImg from '../../../../assets/circle-plus.svg'
import minusImg from '../../../../assets/circle-minus.svg'

import { Container } from './styles'
import ConfirmOrder from '../../../../components/Ordercloseaction/ConfirmOrder'

export default function TableDesktop() {
  const { cart, removeSnackFromCart, snackCarIncrement, snackCarDecrement } = useCart()

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Lanche</th>
            <th>Quantidade</th>
            <th>SubTotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={`${item.snack}-${item.id}`}>
              <td>
                <img src={item.image} alt={item.name} />
              </td>
              <td>
                <h4>{item.name}</h4>
                <span>{currencyFormat(item.price)}</span>
              </td>
              <td>
                <div>
                  <button type='button' onClick={() => snackCarDecrement(item)}>
                    <img src={minusImg} alt='Decremento' />
                  </button>
                  <span>{`${item.quantity}`.padStart(2, '0')}</span>
                  <button type='button' onClick={() => snackCarIncrement(item)}>
                    <img src={plusImg} alt='Decremento' />
                  </button>
                </div>
              </td>
              <td>
                <h5>{currencyFormat(item.subtotal)}</h5>
              </td>
              <td>
                <button type='button' onClick={() => removeSnackFromCart(item)}>
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ConfirmOrder />
    </Container>
  )
}
