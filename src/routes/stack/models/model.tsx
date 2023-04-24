import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type propsNavigationStack = {
  Home: undefined;
  TelaInicial: undefined;
  Login: undefined;
  CadastroInicial: undefined;
  CadastroFinal: CadastroFinalParams;
  CategoriaServico: undefined;
  ListaServicos: ListaServicosParams;
  AgendamentoServico: AgendamentoServicoParams;
  Perfil: undefined;
};

export interface CadastroFinalParams {
  usuarioId: String;
}

export interface ListaServicosParams {
  listaServicos: string[];
}

export interface AgendamentoServicoParams {
  servicoSelecionado: string;
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>;
