import { useState, useEffect, useContext } from 'react'

import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'

import { getIceCreams } from '../../../services/api'
import { SnackData } from '../../../interfaces/SnackData'
import { SnackContext } from '../../../App'

export default function IceCreams() {
  const { iceCreams } = useContext(SnackContext)

  return (
    <>
      <Head title='Ice-creams' description='Nossos melhores ice creams' />
      <SnackTitle> IceCreams</SnackTitle>
      <Snacks snacks={iceCreams}></Snacks>
    </>
  )
}
