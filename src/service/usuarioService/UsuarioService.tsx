import { AxiosResponse } from "axios";
import { UsuarioAtualizarDTO } from "../../dtos/UsuarioAtualizarDTO";
import { UsuarioCriarDTO } from "../../dtos/UsuarioCriarDTO";
import { UsuarioByIdDTO } from "../../dtos/UsuarioByIdDTO";
import Toast from 'react-native-toast-message';
import api from "../api";

export async function cadastrarUsuario(nome: string, email: string, telefone: string, senha: string): Promise<String> {
  const usuarioCriar = { nome, email, senha, telefone } as UsuarioCriarDTO;

  try {
    const response = await api.post<String>('/usuario', usuarioCriar);
    const userResponse = response.data;
    return userResponse;
  } catch (error) {
    Toast.show({
      type: 'error',
      text1: 'Erro ao criar usuário',
      text2: 'Verifique se todos os dados estão corretos ou se há conexão com internet.',
      visibilityTime: 8000,
    });
    return ""
  }
}

export async function atualizarUsuario(usuarioId: String, latitude: string, longitude: string, endereco: string, profissoes: string[]): Promise<UsuarioAtualizarDTO> {
  const usuarioAtualizar = { latitude, longitude, endereco, profissoes } as UsuarioAtualizarDTO;
  return await api
    .put<UsuarioAtualizarDTO>(`/usuario/atualizar/${usuarioId}`, usuarioAtualizar)
    .then((response: AxiosResponse<UsuarioAtualizarDTO>) => {
      return response.data;
    })
    .catch((error) => {
      Toast.show({
        type: 'error',
        text1: 'Erro ao atualizar dados',
        text2: 'Verifique se todos os dados estão corretos ou se há conexão com internet.',
        visibilityTime: 8000,
      });
      throw new Error("/usuario/atualizar/ - " + error);
    });
}

export async function findById(usuarioId: String): Promise<UsuarioByIdDTO> {
  return await api
    .get<UsuarioByIdDTO>(`/usuario/${usuarioId}`)
    .then((response: AxiosResponse<UsuarioByIdDTO>) => {
      return response.data;
    })
    .catch((error) => {
      Toast.show({
        type: 'error',
        text1: 'Erro ao buscar usuário',
        text2: 'Verifique se todos os dados estão corretos ou se há conexão com internet.',
        visibilityTime: 8000,
      });
      throw new Error(`/usuario/${usuarioId} - ` + error);
    });
}