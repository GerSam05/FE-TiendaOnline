import { Articulo } from "./articulo"

export interface ApiResponseList {
  statusCode: number;
  isSuccess: boolean;
  message: string;
  result: Articulo[];
}