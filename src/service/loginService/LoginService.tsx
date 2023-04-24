import { AxiosResponse } from "axios";
import { UsuarioEmailDTO } from "../../dtos/UsuarioEmailDTO";
import { UsuarioEmailSenhaDTO } from "../../dtos/UsuarioEmailSenhaDTO";
import api from "../api";
import { onSignIn } from "../auth";
import { UsuarioDTO as Usuario } from "../../dtos/UsuarioDTO";

export async function login(email: string, senha: string): Promise<Usuario> {
  const usuarioLogin = { email, senha } as UsuarioEmailSenhaDTO;
  return await api
    .post<Usuario>(`/inicio/login`, usuarioLogin)
    .then((response: AxiosResponse<Usuario>) => {
      const user = response.data;
      onSignIn(user);
      return user;
    })
    .catch((error) => {
      throw new Error(`Erro ao fazer Login. Erro: ${error}`);
    });
}

export async function verificarUsuarioExistente(emailUsuario: string): Promise<Boolean> {
  const data = { email: emailUsuario } as unknown as UsuarioEmailDTO;
  return await api.post<Boolean>('/inicio/cadastro/usuario-existente', data)
    .then((response: AxiosResponse<Boolean>) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(error);
    });
}