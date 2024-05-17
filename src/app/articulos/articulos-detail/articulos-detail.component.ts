import { Component } from '@angular/core';
import { Articulo } from '../../core/models/articulo';
import { ActivatedRoute } from '@angular/router';
import { ArticulosService } from '../../core/services/articulos.service';
import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-articulos-detail',
  standalone: true,
  imports: [MatCardModule, RouterModule],
  templateUrl: './articulos-detail.component.html',
  styleUrl: './articulos-detail.component.css'
})
export class ArticulosDetailComponent {
  id: number;
  articulo!: Articulo;

  constructor(private _articulosService: ArticulosService, private aRoute: ActivatedRoute) {
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.obtenerMascota();
  }

  obtenerMascota() {
    this._articulosService.getArticulo(this.id).subscribe(response => {
      this.articulo = response.result;
    })
  }
}
