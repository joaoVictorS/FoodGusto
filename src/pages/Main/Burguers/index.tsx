import { useSnack } from '../../../Hooks/useSnacks'
import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'

export default function Burguers() {
  const { burgers } = useSnack()
  return (
    <>
      <Head title='Hamburguers' description='Nossos melhores burgueres' />
      <SnackTitle> Hamburgueres</SnackTitle>
      <Snacks snacks={burgers} />
    </>
  )
}
