import { createContext, useState, ReactNode } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import { SnackData } from '../interfaces/SnackData'

import { snackEmoji } from '../helpers/snackEmoji'

interface Snack extends SnackData {
  quantity: number
  subtotal: number
}

interface CartContextProps {
  cart: Snack[]
  addSnackIntoCart: (snack: SnackData) => void
  removeSnackFromCart: (snack: Snack) => void
  snackCarIncrement: (snack: Snack) => void
  snackCarDecrement: (snack: Snack) => void
  confirmOrder: () => void
  payOrder: () => void
}

interface CartProviderProps {
  children: ReactNode
}

export const CardContext = createContext({} as CartContextProps)

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Snack[]>([])
  const navigate = useNavigate()

  function addSnackIntoCart(snack: SnackData): void {
    //* buscar
    const snackExistentInCart = cart.find(
      (item) => item.snack == snack.snack && item.id == snack.id,
    )

    //* atualizar
    if (snackExistentInCart) {
      const newCart = cart.map((item) => {
        if (item.id === snack.id) {
          const quantity = item.quantity + 1
          const subtotal = item.price * quantity

          return { ...item, quantity, subtotal }
        }
        return item
      })
      toast.success(`Outro(a) ${snackEmoji(snack.snack)} ${snack.name} adicionado nos pedidos!`)
      setCart(newCart)

      return
    }
    //* adicionar
    const newSnack = { ...snack, quantity: 1, subtotal: snack.price }
    const newCart = [...cart, newSnack] //* push no array

    console.log(`newCart adicao`, newCart)
    toast.success(`${snackEmoji(snack.snack)} ${snack.name} Adicionado nos Pedidos!`)
    setCart(newCart)
  }

  function removeSnackFromCart(snack: Snack) {
    const newCart = cart.filter((item) => !(item.id === snack.id && item.snack === snack.snack))

    setCart(newCart)
    //
  }

  function updateSnackFromCart(snack: Snack, newQuantity: number) {
    if (newQuantity <= 0) return

    const snackExistentInCart = cart.find(
      (item) => item.id === snack.id && item.snack === snack.snack,
    )

    if (!snackExistentInCart) return

    const newCart = cart.map((item) => {
      if (item.id === snackExistentInCart.id && item.snack === snackExistentInCart.snack) {
        return {
          ...item,
          quantity: newQuantity,
          subtotal: item.price * newQuantity,
        }
      }
      return item
    })
    setCart(newCart)
  }

  function snackCarIncrement(snack: Snack) {
    updateSnackFromCart(snack, snack.quantity + 1)
  }

  function snackCarDecrement(snack: Snack) {
    updateSnackFromCart(snack, snack.quantity - 1)
  }

  function confirmOrder() {
    navigate('/payment')
  }

  function payOrder() {
    //
  }

  return (
    <CardContext.Provider
      value={{
        cart,
        addSnackIntoCart,
        removeSnackFromCart,
        snackCarIncrement,
        snackCarDecrement,
        confirmOrder,
        payOrder,
      }}
    >
      {children}
    </CardContext.Provider>
  )
}
