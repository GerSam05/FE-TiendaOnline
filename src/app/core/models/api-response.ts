import { Articulo } from "./articulo"

export interface ApiResponse {
  statusCode: number;
  isSuccess: boolean;
  message: string;
  result: object;
}