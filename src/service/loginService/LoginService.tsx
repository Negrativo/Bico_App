import { UsuarioByIdDTO } from "../../dtos/UsuarioDTO";
import api from "../api";

export async function login(email: string, senha: string) {
  try {
    const res = await api
      .post('/inicio/login', { email, senha });
    return res.data.user;
  } catch (error) {
    console.log('Erro no login: ', error);
  }
}