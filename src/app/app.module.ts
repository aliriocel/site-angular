import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatoComponent } from './contato/contato.component';
import { RouterModule } from '@angular/router';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { DestinosComponent } from './destinos/destinos.component';

@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    QuemSomosComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    DestinosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'contato', component: ContatoComponent},
      {path: 'quem-somos', component: QuemSomosComponent},
      {path: 'destinos', component: DestinosComponent},
      {path: 'inicio', component: InicioComponent},
      {path: '', component: InicioComponent},
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
