import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../../core/services/articulos.service';
import { ApiResponse } from '../../core/models/api-response';
import { Articulo } from '../../core/models/articulo';

import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatTooltip } from '@angular/material/tooltip';


import {MatTableDataSource, MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
  }

@Component({
  selector: 'app-articulos-list',
  standalone: true,
  imports: [MatTableModule, MatIconModule, RouterModule, MatTooltip],
  templateUrl: './articulos-list.component.html',
  styleUrl: './articulos-list.component.css'
})
export class ArticulosListComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'nombre', 'marca', 'categoria', 'precio', 'acciones'];
  dataSource = new MatTableDataSource<Articulo>();
  apiResponse: ApiResponse;

  constructor (private _articulosService: ArticulosService) {}

  ngOnInit(): void {
    this.obtenerArticulos();
  }

  obtenerArticulos() {
    this._articulosService.getArticulos().subscribe({
      next: (response) => {
        this.dataSource.data = response.result;
    },  
    error: (e) => console.error('Unexpected Error:', e),
    complete: () => console.info('complete')
    })
  }

  eliminarArticulo(id: number) {
    this._articulosService.deleteArticulo(id).subscribe((response) => {
      alert(`${response.message}`)
      this.obtenerArticulos();
    });
  }
}
