import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component'

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent},
      { path: "**", component: NotFoundComponent, data: { title: "Page Not Found" } },
    ]),
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule { }
