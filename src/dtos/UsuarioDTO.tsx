export interface UsuarioDTO {
  id: string;
  nome: string;
  email: string;
  senha: string;
  telefone: string;
  servicos: string[];
  latitude: string;
  longitude: string;
  endereco: string;
  verificatedAt: string;
}

export interface UsuarioServicoDTO {
  id: string;
  usuario: string;
  servico: string;
}