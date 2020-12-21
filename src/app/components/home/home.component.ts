import { Component, OnInit } from "@angular/core";
import { CiudadService } from '../../services/ciudad.service';
import { CiudadModel } from '../../models/ciudad.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

  exitoConsulta: boolean = false;
  listCiudades: any = [];
  constructor(private ciudadService: CiudadService) {
     
  }

  ngOnInit() {
    this.getDataCities();
  }

  getDataCities(){
    this.exitoConsulta = true
    this.ciudadService.getDataCities().subscribe(
        (response)=>{
            this.listCiudades = response.data
            console.log(this.listCiudades)
            this.exitoConsulta = false
        },
        error =>{
            alert(error.message)
            this.exitoConsulta = false
        }
    )
  }
}
