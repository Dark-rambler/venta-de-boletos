import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DataViewLayoutChangeEvent } from 'primeng/dataview';
import { PrimeModule } from 'src/app/prime.module';

@Component({
  selector: 'app-vista-principal',
  templateUrl: './vista-principal.component.html',
  styleUrls: ['./vista-principal.component.css'],
  standalone: true,
  imports: [RouterModule, PrimeModule, CommonModule],
})
export default class VistaPrincipalComponent {


  public promos = [
    {
      title: 'Promo 1',
      description: 'Promo 1 description',
      price: 100,
      image: 'https://via.placeholder.com/250',
    },
    {
      title: 'Promo 2',
      description: 'Promo 2 description',
      price: 200,
      image: 'https://via.placeholder.com/250',
    },
    {
      title: 'Promo 3',
      description: 'Promo 3 description',
      price: 300,
      image: 'https://via.placeholder.com/250',
    },
    {
      title: 'Promo 4',
      description: 'Promo 4 description',
      price: 400,
      image: 'https://via.placeholder.com/250',
    },
    {
      title: 'Promo 5',
      description: 'Promo 5 description',
      price: 500,
      image: 'https://via.placeholder.com/250',
    },
    {
      title: 'Promo 6',
      description: 'Promo 6 description',
      price: 600,
      image: 'https://via.placeholder.com/250',
    },
    {
      title: 'Promo 7',
      description: 'Promo 7 description',
      price: 700,
      image: 'https://via.placeholder.com/250',
    },
    {
      title: 'Promo 8',
      description: 'Promo 8 description',
      price: 800,
      image: 'https://via.placeholder.com/250',
    },
    {
      title: 'Promo 9',
      description: 'Promo 9 description',
      price: 900,
      image: 'https://via.placeholder.com/250',
    },
    {
      title: 'Promo 10',
      description: 'Promo 10 description',
      price: 1000,
      image: 'https://via.placeholder.com/250',
    }
  ];

  public eventos = [
    {
      id: 1,
      title: 'Evento 1',
      description: 'Evento 1 description',
      price: 100,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Evento 2',
      description: 'Evento 2 description',
      price: 200,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      title: 'Evento ',
      description: 'Evento 3 description',
      price: 300,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      title: 'Evento solcito',
      description: 'Evento 4 description',
      price: 400,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 5,
      title: 'Evento 5',
      description: 'Evento 5 description',
      price: 500,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 6,
      title: 'Evento 6',
      description: 'Evento 6 description',
      price: 600,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 7,
      title: 'Evento 7',
      description: 'Evento 7 description',
      price: 700,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 8,
      title: 'Evento 8',
      description: 'Evento 8 description',
      price: 800,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 9,
      title: 'Evento 9',
      description: 'Evento 9 description',
      price: 900,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 10,
      title: 'Evento 10',
      description: 'Evento 10 description',
      price: 1000,
      image: 'https://via.placeholder.com/150',
    }
  ];

  public data: any[] = this.eventos;
  public tittle: string = 'Eventos';
  constructor(private router: Router) { }

  public ingresarCard(id: number): void {
    console.log('Ingresar a la card con id:', id);
    this.router.navigate([`/evento/${id}`]); // Navegar a la ruta dinámica
  }

  public cambiarVista(event: DataViewLayoutChangeEvent) {
    if (event.layout === 'grid') {
      this.data = this.promos;
      this.tittle = 'Promociones';
    } else {
      this.data = this.eventos;
      this.tittle = 'Eventos';
    }
  }

}
