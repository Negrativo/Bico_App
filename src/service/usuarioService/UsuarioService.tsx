import { UsuarioCriarDTO } from "../../dtos/UsuarioCriarDTO";
import { UsuarioByIdDTO } from "../../dtos/UsuarioDTO";
import api from "../api";

export async function cadastrarUsuario(nome: string, email: string, telefone: string, senha: string, latitude: number, longitude: number, endereco: string, profissoes: string[]) {
  const usuarioCriar = { nome, email, telefone, senha, latitude, longitude, endereco, profissoes } as UsuarioCriarDTO;
  console.log(usuarioCriar);
  try {
    const usuarioCriar = { nome, email, senha, telefone, latitude, longitude, endereco, profissoes } as UsuarioCriarDTO;
    const res = await api
      .post('/usuario', usuarioCriar);
    return res.data.user as UsuarioCriarDTO;
  } catch (error) {
    console.log('Erro no cadastro: ', error);
  }
}