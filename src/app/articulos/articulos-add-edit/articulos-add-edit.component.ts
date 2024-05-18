import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../../core/services/articulos.service';
import { Articulo } from '../../core/models/articulo';

import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-articulos-add-edit',
  standalone: true,
  imports: [MatCardModule, ReactiveFormsModule, FormsModule, MatGridListModule, MatFormFieldModule, MatInputModule],
  templateUrl: './articulos-add-edit.component.html',
  styleUrl: './articulos-add-edit.component.css'
})
export class ArticulosAddEditComponent implements OnInit {

  form: FormGroup // variable para el formulario reactivo
  id!: number;
  operacion: string = 'Agregar';

  constructor(private fb: FormBuilder, private _articulosService: ArticulosService, 
                          private router: Router, 
                          private aRoute: ActivatedRoute) {

    this.form = this.fb.group({
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
      marca: ['', Validators.required],
      categoria: ['', Validators.required],
      precio: ['', Validators.required],
    })

    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    if (this.id != 0) {
      this.operacion = 'Editar';
      this.obtenerArticulo(this.id);
    }
  }

  obtenerArticulo(id: number) {
    this._articulosService.getArticulo(id).subscribe(response => {
      this.form.setValue({
        codigo: response.result.codigo,
        nombre: response.result.nombre,
        marca: response.result.marca,
        categoria: response.result.categoria,
        precio: response.result.precio,
      }) 
    })
  }

  aggEditarArticulo(){
    const articulo: Articulo = {
      codigo: this.form.value.codigo,
      nombre: this.form.value.nombre,
      marca: this.form.value.marca,
      categoria: this.form.value.categoria,
      precio: this.form.value.precio,
    }

    if (this.id != 0) {
      articulo.id = this.id;
      this.editarArticulo(this.id, articulo);
    } else {
      this.aggArticulo(articulo);
    }
  }

  editarArticulo(id: number, articulo: Articulo) {
    this._articulosService.putArticulo(id, articulo).subscribe((response) => {
      alert(`${response.message}`);
      this.router.navigate(['/articulos']);
    })
  }

  aggArticulo(articulo: Articulo) {
    // Envio del Objeto al service
    this._articulosService.postArticulo(articulo).subscribe(response => {
      alert(`Articulo creado`);
      console.log(response.result);
      this.router.navigate(['/articulos']);
    })
  }

  preventFormSubmit(event: MouseEvent): void {
    event.preventDefault(); 
    this.router.navigate(['/articulos']);
  }
}

