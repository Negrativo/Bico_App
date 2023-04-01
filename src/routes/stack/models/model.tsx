import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type propsNavigationStack = {
  TelaInicial: undefined;
  Login: undefined;
  CadastroInicial: undefined;
  CadastroFinal: CadastroFinalParams;
  CategoriaServico: undefined;
  ListaServicos: ListaServicosParams;
  AgendamentoServico: AgendamentoServicoParams;
};

export interface CadastroFinalParams {
  nome: string,
  email: string,
  senha: string,
  telefone: string
}

export interface ListaServicosParams {
  listaServicos: string[];
}

export interface AgendamentoServicoParams {
  servicoSelecionado: string;
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>;
