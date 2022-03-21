import { Component } from '@angular/core';
import { GifsServiceService } from '../services/gifs-service.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent  {

  get resultados(){
    return this.GifsServiceService.resultados;
  }

  constructor( private GifsServiceService: GifsServiceService ) { }

}
