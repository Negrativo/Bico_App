import { ListaEmpregoDTO } from "../../dtos/ListaEmpregosDTO";

export interface BarraPesquisaProps {
  Lista: ListaEmpregoDTO[],
  placeholder: string,
  selecionaProfissao: any;
}