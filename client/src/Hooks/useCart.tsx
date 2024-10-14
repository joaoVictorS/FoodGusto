import {useContext} from 'react'

import { CardContext } from '../contexts/CartContext'

export function useCart(){
  return useContext(CardContext)
}
