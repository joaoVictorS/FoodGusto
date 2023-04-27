import { useState, useEffect, useContext } from 'react'

import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'

import { getBurguers } from '../../../services/api'
import { SnackData } from '../../../interfaces/SnackData'
import { SnackContext } from '../../../App'

export default function Burguers() {
  const { burgers } = useContext(SnackContext)
  return (
    <>
      <Head title='Hamburguers' description='Nossos melhores burgueres' />
      <SnackTitle> Hamburgueres</SnackTitle>
      <Snacks snacks={burgers} />
    </>
  )
}
