import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DataViewLayoutChangeEvent } from 'primeng/dataview';
import { PrimeModule } from 'src/app/prime.module';
import { VistaPrincipalService } from './service/vista-principal.service';
import { Promo } from 'src/app/interfaces/promo.interface';
import { Evento } from 'src/app/interfaces/evento.interface';
import { AuthService } from '../login/service/auth.service';

@Component({
  selector: 'app-vista-principal',
  templateUrl: './vista-principal.component.html',
  styleUrls: ['./vista-principal.component.css'],
  standalone: true,
  imports: [RouterModule, PrimeModule, CommonModule],
})
export default class VistaPrincipalComponent {

  public autenticado: boolean;

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
    private vistaPrincipalService: VistaPrincipalService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.autenticado = this.authService.isToken();
    this.getEventos();
  }

  public getEventos() {
    this.vistaPrincipalService.getEventos()
      .subscribe((promos: Evento[]) => {
        this.data = promos;
      });
  }

  public getPromos() {
    this.vistaPrincipalService.getPromos()
      .subscribe((promos: Promo[]) => {
        this.data = promos;
      });
  }

  public ingresarCard(id: string) {
    this.router.navigate([`/evento/${id}`]);
  }

  public crearEvento(): void {
    this.vistaPrincipalService.postEvento()
      .then(() => {
        console.log('Evento creado');
      });
  }

  public crearPromo(): void {
    this.vistaPrincipalService.postPromo()
      .then(() => {
        console.log('Promo creada');
      }
      );
  }

  public cambiarVista(event: DataViewLayoutChangeEvent) {

    if (event.layout === 'grid') {
      this.getPromos();
      this.tittle = 'Promociones';
      return;
    }
    this.getEventos();
    this.tittle = 'Eventos';
  }
  public cerrarSesion(): void {
    this.authService.removeToken();
    this.router.navigate(['/login']);
  }

}
