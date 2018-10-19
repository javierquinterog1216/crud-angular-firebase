import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

// servicio
import { ProductoService } from '../../../servicios/producto.service';
import { ToastrService } from 'ngx-toastr';
// modelo
import { Producto } from 'src/app/model/producto';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  constructor(
    public productoService: ProductoService,
    private toast: ToastrService
  ) {}

  ngOnInit() {
    this.productoService.getProductos();
    this.limpiarForm();
  }

  onSubmit(productoForm: NgForm) {
    if (productoForm.value.$key == null) {
      this.productoService.insertProducto(productoForm.value);
          }
    // tslint:disable-next-line:one-line
    else {
      this.productoService.updateProducto(productoForm.value);
    }
    this.limpiarForm(productoForm);
    this.toast.success('Guardar', 'El producto se almacenó correctamente');
  }

  limpiarForm(productoForm?: NgForm) {
    if (productoForm != null) {
      productoForm.reset();
      this.productoService.selectedProducto = new Producto();
    }
  }
}
