import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'

import { useSnack } from '../../../Hooks/useSnacks'

export default function Drinks() {
  const { drinks } = useSnack()

  return (
    <>
      <Head title='Drinks' description='Nossos melhores drinks' />
      <SnackTitle> Drinks</SnackTitle>
      <Snacks snacks={drinks}></Snacks>
    </>
  )
}
