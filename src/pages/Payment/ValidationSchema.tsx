import * as yup from 'yup';
import { isValidPhone, isValidCNPJ, isValidCPF } from '@brazilian-utils/brazilian-utils';

export const schema = yup.object({
  fullName: yup
    .string()
    .required('Nome e sobrenome são obrigatórios')
    .min(5, 'Nome e sobrenome devem ter no mínimo 5 caracteres')
    .matches(/^[a-zA-Z\s]*$/, 'Nome e sobrenome devem conter apenas letras'),
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  mobile: yup
    .string()
    .required('Celular é obrigatório')
    .transform((value) => value.replace(/\D/g, ''))
    .test('validateMobile', 'Celular inválido', (value) => isValidPhone(value || '')),  // Ensure value is not undefined
  document: yup
    .string()
    .required('CPF ou CNPJ é obrigatório')
    .transform((value) => value.replace(/\D/g, ''))
    .test('validateDocument', 'CPF/CNPJ inválido', (value) => isValidCPF(value || '') || isValidCNPJ(value || '')),  // Ensure value is not undefined
  zipcode: yup
    .string()
    .required('CEP é obrigatório')
    .transform((value) => value.replace(/\D/g, '')),
  street: yup.string().required('Endereço é obrigatório'),
  number: yup.string().required('Número é obrigatório'),
  complemento: yup.string().required('Complemento é obrigatório'),
  neighborhood: yup.string().required('Bairro é obrigatório'),
  city: yup.string().required('Cidade é obrigatório'),
  state: yup.string().required('Estado é obrigatório'),
  creditCardNumber: yup.string().required('Número do cartão é obrigatório').transform((value) => value.replace(/\D/g, '')),
  creditCardHolderName: yup.string().required('Nome impresso no cartão é obrigatório'),
  creditCardExpiration: yup.string().required('Validade do cartão é obrigatória').transform((value) => value.replace(/\D/g, '')),
  creditCardCode: yup.string().required('Código de segurança do cartão é obrigatório'),
});

export type FieldValues = yup.InferType<typeof schema>;
