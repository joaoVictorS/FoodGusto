import { Head } from '../../components/Head'
import OrderHeader from '../../components/OrderHeader'
import PayOrder from '../../components/Ordercloseaction/PayOrder'
import { Container, Form, Inner } from './styles'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
  fullName: yup.string().required('Nome e sobrenome são obrigatórios'),
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  mobile: yup.string().required('Celular é obrigatório'),
  cpf: yup.string().required('CPF é obrigatório'),
  zipcode: yup.string().required('CEP é obrigatório'),
  street: yup.string().required('Endereço é obrigatório'),
  number: yup.string().required('Número é obrigatório'),
  complemento: yup.string().required('Complemento é obrigatório'),
  neighborhood: yup.string().required('Bairro é obrigatório'),
  city: yup.string().required('Cidade é obrigatório'),
  state: yup.string().required('Estado é obrigatório'),
  creditCardNumber: yup.string().required('Número do cartão é obrigatório'),
  creditCardHolderName: yup.string().required('Nome impresso no cartão é obrigatório'),
  creditCardExpiration: yup.string().required('Validade do cartão é obrigatória'),
  creditCardCode: yup.string().required('Código de segurança do cartão é obrigatório'),
})

type FieldValues = yup.InferType<typeof schema>

export default function Payment() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(schema),
  })
  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data)

  return (
    <Container>
      <Head title='Pagamento' />
      <OrderHeader />
      <Inner>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h4>Informações pessoais</h4>

          <div className='field'>
            <label htmlFor='fullName'>Nome e sobrenome</label>
            <input type='text' id='fullName' autoComplete='name' {...register('fullName')} />
            {errors.fullName && <span>Nome e sobrenome são obrigatórios</span>}
          </div>

          <div className='grouped'>
            <div className='field'>
              <label htmlFor='email'>E-mail</label>
              <input type='email' id='email' autoComplete='email' {...register('email')} />
              {errors.email && <span>E-mail inválido</span>}
            </div>

            <div className='field'>
              <label htmlFor='mobile'>Celular</label>
              <input type='tel' id='mobile' autoComplete='phone' {...register('mobile')} />
              {errors.mobile && <span>Celular é obrigatório</span>}
            </div>

            <div className='field'>
              <label htmlFor='document'>CPF / CNPJ</label>
              <input type='text' id='document' {...register('cpf')} />
              {errors.cpf && <span>CPF é obrigatório</span>}
            </div>
          </div>

          <h4>Endereço de entrega</h4>

          <div className='field'>
            <label htmlFor='zipcode'>CEP</label>

            <input
              type='text'
              id='zipcode'
              autoComplete='postal-code'
              style={{ width: '120px' }}
              {...register('zipcode')}
            />
            {errors.zipcode && <span>CEP é obrigatório</span>}
          </div>

          <div className='field'>
            <label htmlFor='street'>Endereço</label>
            <input type='text' id='street' {...register('street')} />
            {errors.street && <span>Endereço é obrigatório</span>}
          </div>

          <div className='grouped'>
            <div className='field'>
              <label htmlFor='number'>Número</label>
              <input type='text' id='number' {...register('number')} />
              {errors.number && <span>Número é obrigatório</span>}
            </div>

            <div className='field'>
              <label htmlFor='complement'>Complemento</label>
              <input type='text' id='complement' {...register('complemento')} />
              {errors.complemento && <span>Complemento é obrigatório</span>}
            </div>
          </div>

          <div className='grouped'>
            <div className='field'>
              <label htmlFor='neighborhood'>Bairro</label>
              <input type='text' id='neighborhood' {...register('neighborhood')} />
              {errors.neighborhood && <span>Bairro é obrigatório</span>}
            </div>

            <div className='field'>
              <label htmlFor='city'>Cidade</label>
              <input type='text' id='city' {...register('city')} />
              {errors.city && <span>Cidade é obrigatório</span>}
            </div>

            <div className='field'>
              <label htmlFor='state'>Estado</label>
              <select id='state' {...register('state')}>
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
              {errors.state && <span>Estado é obrigatório</span>}
            </div>
          </div>

          <h4>Pagamento</h4>

          <div className='field'>
            <label htmlFor='credit-card-number'>Número do cartão</label>
            <input
              type='text'
              id='credit-card-number'
              autoComplete='cc-number'
              {...register('creditCardNumber')}
            />
            {errors.creditCardNumber && <span>Número do cartão é obrigatório</span>}
          </div>

          <div className='field'>
            <label htmlFor='credit-card-holder-name'>Nome impresso no cartão</label>
            <input
              type='text'
              id='credit-card-holder-name'
              autoComplete='cc-name'
              {...register('creditCardHolderName')}
            />
            {errors.creditCardHolderName && <span>Nome impresso no cartão é obrigatório</span>}
          </div>

          <div className='grouped'>
            <div className='field'>
              <label htmlFor='credit-card-expiration'>Validade (MM/AA)</label>
              <input
                type='text'
                id='credit-card-expiration'
                autoComplete='cc-exp'
                {...register('creditCardExpiration')}
              />
              {errors.creditCardExpiration && <span>Validade do cartão é obrigatória</span>}
            </div>

            <div className='field'>
              <label htmlFor='credit-card-code'>Código de segurança (CVV)</label>
              <input
                type='text'
                id='credit-card-code'
                autoComplete='cc-csc'
                {...register('creditCardCode')}
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
