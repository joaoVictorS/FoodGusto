import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'

import { useSnack } from '../../../Hooks/useSnacks'

export default function IceCreams() {
  const { iceCreams } = useSnack()

  return (
    <>
      <Head title='Ice-creams' description='Nossos melhores ice creams' />
      <SnackTitle> IceCreams</SnackTitle>
      <Snacks snacks={iceCreams}></Snacks>
    </>
  )
}
