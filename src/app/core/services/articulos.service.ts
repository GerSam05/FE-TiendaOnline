import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponseList } from '../models/api-response-list';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  private myApiUrl: string = 'https://localhost:7130/api/articulo';

  constructor(private http: HttpClient) { }

  getArticulos(): Observable<ApiResponseList>{
    return this.http.get<ApiResponseList>(`${this.myApiUrl}`);
  }
}
