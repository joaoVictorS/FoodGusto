import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'

import { useSnack } from '../../../hooks/useSnacks'

export default function Burguers() {
  const { pizzas } = useSnack()

  return (
    <>
      <Head title='pizzas' description='Nossas melhores pizzas' />
      <SnackTitle> Pizzas</SnackTitle>
      <Snacks snacks={pizzas}></Snacks>
    </>
  )
}
