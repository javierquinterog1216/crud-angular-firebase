import { Component, OnInit } from '@angular/core';

// servicio
import { ProductoService } from '../../../servicios/producto.service';
import { ToastrService } from 'ngx-toastr';
// modelo
import { Producto } from '../../../model/producto';


@Component({
  selector: 'app-productos-lista',
  templateUrl: './productos-lista.component.html',
  styleUrls: ['./productos-lista.component.css']
})
export class ProductosListaComponent implements OnInit {
  productosLista: Producto[];

  constructor(private productoService: ProductoService, private toastr: ToastrService) {}

  ngOnInit() {
    this.productoService
      .getProductos()
      .snapshotChanges()
      .subscribe(item => {
        this.productosLista = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x['$key'] = element.key;
          this.productosLista.push(x as Producto);
        });
      });
  }

  onEdit(producto: Producto) {
    this.productoService.selectedProducto = Object.assign({}, producto);
  }
  onDelete($key: string) {
    if (confirm('Seguro quiere eliminar el producto?')) {
      this.productoService.deleteProducto($key);
      this.toastr.success('Eliminar Producto', 'Producto eliminado');
    }
  }
}
