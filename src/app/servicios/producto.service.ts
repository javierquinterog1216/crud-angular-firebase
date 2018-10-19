import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Producto } from '../model/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

listaProductos: AngularFireList<any>;

selectedProducto: Producto = new Producto();

  constructor(private firebase: AngularFireDatabase) { }

  getProductos() {
    return this.listaProductos = this.firebase.list('producto');
  }

  insertProducto(producto: Producto) {

    this.listaProductos.push({
      nombre: producto.nombre,
      categoria: producto.categoria,
      ubicacion: producto.ubicacion,
      precio: producto.precio
    });
  }

  updateProducto(producto: Producto) {
    this.listaProductos.update(producto.$key, {
    nombre: producto.nombre,
    categoria: producto.categoria,
    ubicacion: producto.ubicacion,
    precio: producto.precio
  });
  }

  deleteProducto($key: string) {
    this.listaProductos.remove($key);
  }
}
