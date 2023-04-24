import { AxiosResponse } from "axios";
import { UsuarioAtualizarDTO } from "../../dtos/UsuarioAtualizarDTO";
import { UsuarioCriarDTO } from "../../dtos/UsuarioCriarDTO";
import api from "../api";
import { UsuarioByIdDTO } from "../../dtos/UsuarioDTO";

export async function cadastrarUsuario(nome: string, email: string, telefone: string, senha: string): Promise<String> {
  const usuarioCriar = { nome, email, senha, telefone } as UsuarioCriarDTO;
  return await api
    .post<String>('/usuario', usuarioCriar)
    .then((response: AxiosResponse<String>) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(error);
    });
}

export async function atualizarUsuario(usuarioId: String, latitude: string, longitude: string, endereco: string, profissoes: string[]): Promise<UsuarioAtualizarDTO> {
  const usuarioAtualizar = { latitude, longitude, endereco, profissoes } as UsuarioAtualizarDTO;
  return await api
    .put<UsuarioAtualizarDTO>(`/usuario/atualizar/${usuarioId}`, usuarioAtualizar)
    .then((response: AxiosResponse<UsuarioAtualizarDTO>) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(error);
    });
}

export async function findById(usuarioId: String): Promise<UsuarioByIdDTO> {
  return await api
    .get<UsuarioByIdDTO>(`/usuario/${usuarioId}`)
    .then((response: AxiosResponse<UsuarioByIdDTO>) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(error);
    });
}