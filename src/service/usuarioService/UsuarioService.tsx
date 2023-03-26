import { UsuarioCriarDTO } from "../../dtos/UsuarioCriarDTO";
import { UsuarioByIdDTO } from "../../dtos/UsuarioDTO";
import api from "../api";

export async function cadastrarUsuario(nome: string, email: string, telefone: string, senha: string) {
  try {
    const usuarioCriar = { nome, email, telefone, senha } as UsuarioCriarDTO;
    const res = await api
      .post('/usuario', usuarioCriar);
    return res.data.user as unknown as UsuarioByIdDTO;
  } catch (error) {
    console.log('Erro no login: ', error);
  }
}