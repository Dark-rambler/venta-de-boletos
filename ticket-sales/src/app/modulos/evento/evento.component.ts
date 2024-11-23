import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { EventoModule } from './evento.module';

@Component({
  selector: 'app-evento',
  standalone: true,
  imports: [CommonModule, EventoModule],
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export default class EventoComponent {
  productId!: string;
  cantidadBoletos: number = 1;
  monto = 0;
  evento: any =  {
    id: 2,
    title: 'Evento 2',
    description: 'Evento 2 description',
    price: 200,
    image: 'https://via.placeholder.com/150',
  };


  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Suscribirse a los parámetros de la ruta
    this.route.paramMap.subscribe((params) => {
      this.productId = params.get('id')!;
      console.log(`Product ID: ${this.productId}`);
      // Aquí puedes cargar los detalles del producto usando el ID
    });

    this.monto = this.evento.price;
  }


  public sumarBoleto(): void {
    this.cantidadBoletos++;
    this.monto = this.cantidadBoletos * this.evento.price;
  }
  public restarBoleto(): void {
    if (this.cantidadBoletos > 1) {
      this.cantidadBoletos--;
      this.monto = this.cantidadBoletos * this.evento.price;
    }
  }
}
