import { useState, useEffect } from "react"

import { Head } from "../../../components/Head"
import { Snacks } from "../../../components/Snacks"
import { SnackTitle } from "../../../components/SnackTitle"

import { getPizzas } from "../../../services/api"
import { SnackData } from "../../../interfaces/SnackData"

export default function Burguers() {
  const [pizzas, setPizzas] = useState<SnackData[]>([])

  useEffect(() => {
    ; (async () => {
      const pizzasRequest = await getPizzas()

      setPizzas(pizzasRequest.data)
    })()
  }, [])

  return (
    <>
      <Head title='pizzas' description="Nossas melhores pizzas" />
      <SnackTitle> Pizzas</SnackTitle>
      <Snacks snacks={pizzas}></Snacks>
    </>
  )

}
