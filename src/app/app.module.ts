import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
// firebase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
// componentes
import { ProductosComponent } from './componentes/productos/productos.component';
import { ProductoComponent } from './componentes/productos/producto/producto.component';
import { ProductosListaComponent } from './componentes/productos/productos-lista/productos-lista.component';
// servicios
import { ProductoService } from '../app/servicios/producto.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ProductoComponent,
    ProductosListaComponent
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
