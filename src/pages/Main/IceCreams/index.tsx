import { useState, useEffect } from "react"

import { Head } from "../../../components/Head"
import { Snacks } from "../../../components/Snacks"
import { SnackTitle } from "../../../components/SnackTitle"

import { getIceCreams } from "../../../services/api"

export default function IceCreams() {
  const [icecreams, setIcecream] = useState([])

  useEffect(() => {
    ; (async () => {
      const iceCreamRequest = await getIceCreams()

      setIcecream(iceCreamRequest.data)
    })()
  }, [])

  return (
    <>
      <Head title='Ice-creams' description="Nossos melhores ice creams" />
      <SnackTitle> IceCreams</SnackTitle>
      <Snacks snacks={icecreams}></Snacks>
    </>
  )

}
