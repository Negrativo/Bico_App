import { UsuarioByIdDTO } from "../../dtos/UsuarioDTO";
import { UsuarioEmailDTO } from "../../dtos/UsuarioEmailDTO";
import { UsuarioEmailSenhaDTO } from "../../dtos/UsuarioEmailSenhaDTO";
import api from "../api";

export async function login(email: string, senha: string) {
  const usuarioLogin = { email, senha } as UsuarioEmailSenhaDTO;
  console.log(usuarioLogin)
  try {
    const res = await api
      .post('/inicio/login', usuarioLogin);
    return res.data.user as unknown as UsuarioByIdDTO;
  } catch (error) {
    console.log('Erro no login: ', error);
  }
}

export async function verificarUsuarioExistente(emailUsuario: string): Promise<boolean> {
  let existente: boolean;
  const data = { email: emailUsuario } as unknown as UsuarioEmailDTO;
  const res = await api.post('/inicio/cadastro/usuario-existente', data);
  existente = res.data;
  return existente;
}