import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientComponent } from './client/client.component';
import { ClientService } from './client/client.service';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/clients', pathMatch: 'full' },
  { path: 'directivas', component: DirectivaComponent },
  { path: 'clients', component: ClientComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [ClientService],
  bootstrap: [AppComponent],
})
export class AppModule {}
