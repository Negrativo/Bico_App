import { AxiosResponse } from "axios";
import { ServicoDoUsuarioDTO } from "../../dtos/ServicoDoUsuarioDTO";
import { SolicitacaoDTO } from "../../dtos/SolicitacaoDTO";
import api from "../api";

export async function solicitarServico(solicitacaoDTO: SolicitacaoDTO) {
  try {
    api.post('/solicitacao/solicitar', solicitacaoDTO);
  } catch (error) {
    console.log('Erro na solicitacao: ', error);
  }
}

export async function getSolicitacoesByUsuario(usuarioId: string): Promise<ServicoDoUsuarioDTO[]> {
  return await api.get<ServicoDoUsuarioDTO[]>(`/solicitacao/${usuarioId}`)
    .then((response: AxiosResponse<ServicoDoUsuarioDTO[]>) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(error);
    });
}