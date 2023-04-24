import { AxiosResponse } from "axios";
import { UsuarioByIdDTO } from "../../dtos/UsuarioDTO";
import { UsuarioEmailDTO } from "../../dtos/UsuarioEmailDTO";
import { UsuarioEmailSenhaDTO } from "../../dtos/UsuarioEmailSenhaDTO";
import api from "../api";

export async function login(email: string, senha: string): Promise<UsuarioByIdDTO> {
  const usuarioLogin = { email, senha } as UsuarioEmailSenhaDTO;
  try {
    const response = await api.post<UsuarioByIdDTO>('/inicio/login', usuarioLogin)
    return response.data;
  } catch (error) {
    throw new Error(`Erro ao criar usuário. Erro: ${error}`);
  }
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