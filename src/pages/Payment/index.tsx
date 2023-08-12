import { Head } from "../../components/Head";
import OrderHeader from "../../components/OrderHeader";
import Table from "../MyCart/Table";
import { Container } from "./styles";

export default function Payment (){
  return (
    <Container>
      <Head title='Pagamento' />
      <OrderHeader />
      <Table />
    </Container>
  )
}
