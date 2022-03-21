
import { Component, ElementRef, ViewChild} from '@angular/core';
import { GifsServiceService } from '../services/gifs-service.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor( private gifsService: GifsServiceService){}

  buscar() {
    
    const valor = this.txtBuscar.nativeElement.value;

    if ( valor.trim().length === 0 ) {
      return;
    }

    this.gifsService.buscarGifs( valor );

    this.txtBuscar.nativeElement.value = '';
  }

}
