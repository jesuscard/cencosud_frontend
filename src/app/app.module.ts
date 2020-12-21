import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HelperService } from "./services/helper.service";
import { HttpService } from './services/http.service';
import { CiudadService } from './services/ciudad.service';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { LoadingComponent } from './components/loading/loading.component'

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoadingComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [
    HttpService,
    HelperService,
    CiudadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
