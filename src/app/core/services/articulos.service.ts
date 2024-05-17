import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponseList } from '../models/api-response-list';
import { ApiResponse } from '../models/api-response';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  private myApiUrl: string = 'https://localhost:7130/api/articulo/';

  constructor(private http: HttpClient) { }

  getArticulos(): Observable<ApiResponseList>{
    return this.http.get<ApiResponseList>(`${this.myApiUrl}`);
  }

  getArticulo(id: number): Observable<ApiResponse>{
    return this.http.get<ApiResponse>(`${this.myApiUrl}${id}`);
  }

  deleteArticulo(id: number): Observable<ApiResponse>{
    return this.http.delete<ApiResponse>(`${this.myApiUrl}${id}`);
  }

}
