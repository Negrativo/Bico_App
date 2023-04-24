import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { UsuarioCriarDTO } from '../../../dtos/UsuarioCriarDTO';

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
  usuarioId: String;
}

export interface ListaServicosParams {
  listaServicos: string[];
}

export interface AgendamentoServicoParams {
  servicoSelecionado: string;
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>;
