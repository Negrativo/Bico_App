import { SolicitacaoDTO } from "../../dtos/SolicitacaoDTO";
import api from "../api";

export async function solicitarServico(solicitacaoDTO: SolicitacaoDTO) {
  try {
    api.post('/solicitacao/solicitar', solicitacaoDTO);
  } catch (error) {
    console.log('Erro na solicitacao: ', error);
  }
}