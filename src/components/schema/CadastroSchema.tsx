import * as Yup from 'yup';

const validateCadastro = Yup.object().shape({
  nome: Yup.string().min(5, 'Nome deve conter ao menos 5 caracteres').required('Nome completo é obrigatorio'),
  email: Yup.string().email('Digite um e-mail válido').required('E-mail obrigatorio'),
  senha: Yup.string().min(4, 'Senha deve conter ao menos 4 caracteres').required('Senha é obrigatorio'),
  senha2: Yup.string().oneOf([Yup.ref('senha')], 'As senhas não batem').required('Confirme a senha')
});

export default validateCadastro;