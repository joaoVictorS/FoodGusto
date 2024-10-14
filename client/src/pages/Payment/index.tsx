import { Head } from '../../components/Head'
import OrderHeader from '../../components/OrderHeader'
import PayOrder from '../../components/Ordercloseaction/PayOrder'
import { Container, Form, Inner } from './styles'
import { SubmitHandler, useForm, useController, Controller } from 'react-hook-form'
import { IMaskInput } from 'react-imask'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema, FieldValues } from './ValidationSchema'
import { useCart } from '../../Hooks/useCart'
import { CustomerData } from '../../interfaces/CustomerData'


export default function Payment() {
  const { payOrder } = useCart()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(schema),
  })
  const onSubmit: SubmitHandler<FieldValues> = (data) => payOrder(data as CustomerData)

  return (
    <Container>
      <Head title='Pagamento' />
      <OrderHeader />
      <Inner>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h4>Informações pessoais</h4>

          <div className='field'>
            <label htmlFor='fullName'>Nome e sobrenome</label>
            <Controller
              name='fullName'
              control={control}
              render={({ field }: { field: any }) => (
                <input type='text' id='fullName' autoComplete='fullName' {...field} />
              )}
            />
            {errors.fullName && <span>Nome e sobrenome são obrigatórios</span>}
          </div>

          <div className='grouped'>
            <div className='field'>
              <label htmlFor='email'>E-mail</label>
              <Controller
                name='email'
                control={control}
                render={({ field }: { field: any }) => (
                  <input type='text' id='email' autoComplete='email' {...field} />
                )}
              />
              {errors.email && <span>E-mail inválido</span>}
            </div>

            <div className='field'>
              <label htmlFor='mobile'>Celular</label>
              <Controller
                name='mobile'
                control={control}
                render={({ field }: { field: any }) => (
                  // eslint-disable-next-line react/jsx-no-undef
                  <IMaskInput
                    type='tel'
                    id='mobile'
                    autoComplete='mobile'
                    {...field}
                    mask='(00) 00000-0000'
                  />
                )}
              />
              {errors.mobile && <span>Celular é obrigatório</span>}
            </div>

            <div className='field'>
              <label htmlFor='document'>CPF / CNPJ</label>
              <Controller
                name='document'
                control={control}
                render={({ field }: { field: any }) => (
                  <IMaskInput
                    type='tel'
                    id='document'
                    autoComplete='document'
                    {...field}
                    mask='000.000.000-00'
                  />
                )}
              />
              {errors.document && <span>CPF é obrigatório</span>}
            </div>
          </div>

          <h4>Endereço de entrega</h4>

          <div className='field'>
            <label htmlFor='zipcode'>CEP</label>
            <Controller
              name='zipcode'
              control={control}
              render={({ field }: { field: any }) => (
                <IMaskInput
                  type='tel'
                  id='zipcode'
                  autoComplete='postal-code'
                  mask='00000-000'
                  style={{ width: '120px' }}
                  {...field}
                />
              )}
            />
            {errors.zipcode && <span>CEP é obrigatório</span>}
          </div>

          <div className='field'>
            <label htmlFor='street'>Endereço</label>
            <Controller
              name='street'
              control={control}
              render={({ field }: { field: any }) => (
                <IMaskInput type='tel' id='street' autoComplete='street-address' {...field} />
              )}
            />
            {errors.street && <span>Endereço é obrigatório</span>}
          </div>

          <div className='grouped'>
            <div className='field'>
              <label htmlFor='number'>Número</label>
              <Controller
                name='number'
                control={control}
                render={({ field }: { field: any }) => (
                  <IMaskInput type='tel' id='number' autoComplete='address-line1' {...field} />
                )}
              />
              {errors.number && <span>Número é obrigatório</span>}
            </div>

            <div className='field'>
              <label htmlFor='complement'>Complemento</label>
              <Controller
                name='complemento'
                control={control}
                render={({ field }: { field: any }) => (
                  <IMaskInput
                    type='tel'
                    id='complement'
                    autoComplete='address-line2'
                    {...field}
                  />
                )}
              />
              {errors.complemento && <span>Complemento é obrigatório</span>}
            </div>
          </div>

          <div className='grouped'>
            <div className='field'>
              <label htmlFor='neighborhood'>Bairro</label>
              <Controller
                name='neighborhood'
                control={control}
                render={({ field }: { field: any }) => (
                  <IMaskInput type='tel' id='neighborhood' autoComplete='address-line2' {...field} />
                )}
              />
              {errors.neighborhood && <span>Bairro é obrigatório</span>}
            </div>

            <div className='field'>
              <label htmlFor='city'>Cidade</label>
              <Controller
                name='city'
                control={control}
                render={({ field }: { field: any }) => (
                  <IMaskInput type='tel' id='city' autoComplete='address-line2' {...field} />
                )}
              />
              {errors.city && <span>Cidade é obrigatório</span>}
            </div>

            <div className='field'>
              <label htmlFor='state'>Estado</label>
              <Controller
                name='state'
                control={control}
                render={({ field }: { field: any }) => (
                  <select id='state' {...field}>
                    <option value=''>Selecione</option>
                    <option value='AC'>Acre</option>
                    <option value='AL'>Alagoas</option>
                    <option value='AP'>Amapá</option>
                    <option value='AM'>Amazonas</option>
                    <option value='BA'>Bahia</option>
                    <option value='CE'>Ceará</option>
                    <option value='ES'>Espírito Santo</option>
                    <option value='GO'>Goiás</option>
                    <option value='MA'>Maranhão</option>
                    <option value='MT'>Mato Grosso</option>
                    <option value='MS'>Mato Grosso do Sul</option>
                    <option value='MG'>Minas Gerais</option>
                    <option value='PA'>Pará</option>
                    <option value='PB'>Paraíba</option>
                    <option value='PR'>Paraná</option>
                    <option value='PE'>Pernambuco</option>
                    <option value='PI'>Piauí</option>
                    <option value='RJ'>Rio de Janeiro</option>
                    <option value='RN'>Rio Grande do Norte</option>
                    <option value='RS'>Rio Grande do Sul</option>
                    <option value='RO'>Rondônia</option>
                    <option value='RR'>Roraima</option>
                    <option value='SC'>Santa Catarina</option>
                    <option value='SP'>São Paulo</option>
                    <option value='SE'>Sergipe</option>
                    <option value='TO'>Tocantins</option>
                    <option value='DF'>Distrito Federal</option>
                  </select>
                )}
              />
              {errors.state && <span>Estado é obrigatório</span>}
            </div>
          </div>

          <h4>Pagamento</h4>

          <div className='field'>
            <label htmlFor='credit-card-number'>Número do cartão</label>
            <Controller
              name='creditCardNumber'
              control={control}
              render={({ field }: { field: any }) => (
                <IMaskInput
                  type='tel'
                  id='credit-card-number'
                  autoComplete='cc-number'
                  {...field}
                  mask='0000 0000 0000 0000'
                />
              )}
            />
            {errors.creditCardNumber && <span>Número do cartão é obrigatório</span>}
          </div>

          <div className='field'>
            <label htmlFor='credit-card-holder-name'>Nome impresso no cartão</label>
            <Controller
              name='creditCardHolderName'
              control={control}
              render={({ field }: { field: any }) => (
                <input type='text' id='credit-card-holder-name' autoComplete='cc-name' {...field} />
              )}
            />
            {errors.creditCardHolderName && <span>Nome impresso no cartão é obrigatório</span>}
          </div>

          <div className='grouped'>
            <div className='field'>
              <label htmlFor='credit-card-expiration'>Validade (MM/AA)</label>
              <Controller
                name='creditCardExpiration'
                control={control}
                render={({ field }: { field: any }) => (
                  <IMaskInput
                    type='tel'
                    id='credit-card-expiration'
                    autoComplete='cc-exp'
                    {...field}
                    mask='00/00'
                  />
                )}
              />
              {errors.creditCardExpiration && <span>Validade do cartão é obrigatória</span>}
            </div>

            <div className='field'>
              <label htmlFor='credit-card-code'>Código de segurança (CVV)</label>
              <Controller
                name='creditCardCode'
                control={control}
                render={({ field }: { field: any }) => (
                  <input type='text' id='credit-card-code' autoComplete='cc-csc' {...field} />
                )}
              />
              {errors.creditCardCode && <span>Código de segurança do cartão é obrigatório</span>}
            </div>
          </div>
          <PayOrder />
        </Form>
      </Inner>
    </Container>
  )
}
