import { Head } from '../../components/Head'
import { Container } from './styles'
import OrderHeader from '../../components/OrderHeader'
import Table from './Table'

export default function MyCart() {
  return (
    <Container>
      <Head title={'alo'} />
      <OrderHeader />
      <Table />
    </Container>
  )
}
