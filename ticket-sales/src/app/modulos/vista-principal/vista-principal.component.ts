import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DataViewLayoutChangeEvent } from 'primeng/dataview';
import { PrimeModule } from 'src/app/prime.module';
import { VistaPrincipalService } from './service/vista-principal.service';
import { Promo } from 'src/app/interfaces/promo.interface';
import { Evento } from 'src/app/interfaces/evento.interface';

@Component({
  selector: 'app-vista-principal',
  templateUrl: './vista-principal.component.html',
  styleUrls: ['./vista-principal.component.css'],
  standalone: true,
  imports: [RouterModule, PrimeModule, CommonModule],
})
export default class VistaPrincipalComponent {


  public promos: Promo[] = [

    {
      nombre: 'Promo 1',
      descripcion: 'Promo 1 description',
      precio: 100,
      imagen: 'https://via.placeholder.com/150',
      fecha: '10/06/2025',
      boletos: 1000,
      lugar: 'Estadio de la ciudad',
      descuento: 10,
      fechaFin: '10/06/2025',
      fechaInicio: '10/06/2024',
      categoria: 'Concierto',
    }
  ]
    ;
  public eventos: Evento[];

  public data: Evento[];
  public tittle: string = 'Eventos';
  constructor(
    private router: Router,
    private vistaPricipalService: VistaPrincipalService
  ) { }

  ngOnInit(): void {
    this.vistaPricipalService.getEventos()
      .subscribe((promos: Evento[]) => {
        this.data = promos;
      });
  }

  public ingresarCard(id: number) {
    this.router.navigate([`/evento/${id}`]);
  }

  public crearEvento(): void {
    this.vistaPricipalService.postEvento()
      .then(() => {
        console.log('Evento creado');
      });
  }

  public cambiarVista(event: DataViewLayoutChangeEvent) {
    if (event.layout === 'grid') {
      this.data = this.promos;
      this.tittle = 'Promociones';
      return;
    }
      this.data = this.eventos;
      this.tittle = 'Eventos';
  }

}
