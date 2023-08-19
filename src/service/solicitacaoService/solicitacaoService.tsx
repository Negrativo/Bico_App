import { AxiosResponse } from "axios";
import { ServicoDoUsuarioDTO } from "../../dtos/ServicoDoUsuarioDTO";
import { SolicitacaoDTO } from "../../dtos/SolicitacaoDTO";
import Toast from 'react-native-toast-message';
import api from "../api";

export async function solicitarServico(solicitacaoDTO: SolicitacaoDTO): Promise<Boolean> {
  try {
    await api.post('/solicitacao/solicitar', solicitacaoDTO);
    Toast.show({
      type: 'success',
      text1: 'Solicitação realizada com sucesso!',
      visibilityTime: 8000,
    });
    return true
  } catch (error) {
    Toast.show({
      type: 'error',
      text1: 'Erro ao solicitar profissional',
      text2: 'Verifique se todos os dados estão corretos ou se há conexão com internet.',
      visibilityTime: 8000,
    });
    return false
  }
}

export async function getSolicitacoesByUsuario(usuarioId: string): Promise<ServicoDoUsuarioDTO[]> {
  return await api.get<ServicoDoUsuarioDTO[]>(`/solicitacao/${usuarioId}`)
    .then((response: AxiosResponse<ServicoDoUsuarioDTO[]>) => {
      return response.data;
    })
    .catch((error) => {
      Toast.show({
        type: 'error',
        text1: 'Erro ao buscar solicitações',
        text2: 'Verifique se há conexão com internet.',
        visibilityTime: 8000,
      });
      throw new Error(`/solicitacao/${usuarioId}` + error);
    });
}