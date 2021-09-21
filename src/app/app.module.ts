import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientComponent } from './client/client.component';
import { ClientService } from './client/client.service';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './client/form.component';

const routes: Routes = [
  { path: '', redirectTo: '/clients', pathMatch: 'full' },
  { path: 'directivas', component: DirectivaComponent },
  { path: 'clients', component: ClientComponent },
  { path: 'clients/form', component: FormComponent },
  { path: 'clients/form/:id', component: FormComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ClientService],
  bootstrap: [AppComponent],
})
export class AppModule {}
