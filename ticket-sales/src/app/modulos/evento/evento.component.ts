import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { EventoModule } from './evento.module';
import { VistaPricipalService } from '../vista-principal/service/vista-pricipal.service';
import { Evento } from 'src/app/interfaces/evento.interface';
import { Carrito } from 'src/app/interfaces/carrito.interface';

@Component({
  selector: 'app-evento',
  standalone: true,
  imports: [CommonModule, EventoModule],
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export default class EventoComponent {
  public productId!: string;
  public cantidadBoletos: number = 1;
  public montoTotal: number = 0;
  public evento: Evento;


  constructor(private route: ActivatedRoute,
    private vistaPricipalService: VistaPricipalService
  ) { }

  ngOnInit(): void {
    // Suscribirse a los parámetros de la ruta
    this.route.paramMap.subscribe((params) => {
      this.productId = params.get('id')!;
      console.log(`Product ID: ${this.productId}`);
      this.getEventoById(this.productId);
      // Aquí puedes cargar los detalles del producto usando el ID
    }
    );
  }

  public incrementar(): void {
    this.cantidadBoletos++;
    this.montoTotal = this.cantidadBoletos * this.evento.precio;
  }

  public decrementar(): void {
    if (this.cantidadBoletos > 1) {
      this.cantidadBoletos--;
      this.montoTotal = this.cantidadBoletos * this.evento.precio;
    }
  }

  private getEventoById(id: string): void {
    this.vistaPricipalService.getEventoById(id).pipe().subscribe((evento) => {
      if (evento) {
        this.evento = evento;
        this.montoTotal = this.cantidadBoletos * this.evento.precio;
        console.log(this.evento);
      } else {
        console.log('Evento no encontrado');
      }
    }
    );
  }

  public agregarAlCarrito(): void {
    const item: Carrito = {
      items: [this.evento],
      cantidad: this.cantidadBoletos,
      montoTotal: this.montoTotal
    };
    this.vistaPricipalService.setCarritoService(item)
    ;
  }
}
