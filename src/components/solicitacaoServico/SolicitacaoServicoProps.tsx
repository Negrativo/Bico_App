export interface SolicitacaoServicoProps {
  usuarioSolicitante: string;
  servico: string;
  diaSelecionado: string;
  horarioSolicitado: string;
  observacao: string;
  endereco: string;
  onPressAceite: any;
  onPressRecusar: any;
}