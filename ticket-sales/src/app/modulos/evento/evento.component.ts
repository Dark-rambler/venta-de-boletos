import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { EventoModule } from './evento.module';
import { Evento } from 'src/app/interfaces/evento.interface';
import { Carrito } from 'src/app/interfaces/carrito.interface';
import { VistaPrincipalService } from '../vista-principal/service/vista-principal.service';

@Component({
  selector: 'app-evento',
  standalone: true,
  imports: [CommonModule, EventoModule],
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css'],
})
export default class EventoComponent {
  public productId!: string;
  public cantidadBoletos: number = 1;
  public montoTotal: number = 0;
  public evento: Evento;

  constructor(
    private route: ActivatedRoute,
    private vistaPrincipalService: VistaPrincipalService
  ) {}

  ngOnInit(): void {
    // Suscribirse a los parámetros de la ruta
    this.route.paramMap.subscribe((params) => {
      this.productId = params.get('id')!;
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
    this.vistaPrincipalService.getEventoById(id).pipe().subscribe((evento) => {
      if (evento) {
        this.evento = evento;
        this.montoTotal = this.cantidadBoletos * this.evento.precio;
        console.log('Evento encontrado', evento);
      } else {
        console.log('Evento no encontrado');
      }
    }
    );
  }

  public agregarAlCarrito(): void {
    const evento: Evento = {
      ...this.evento,
      boletos: this.cantidadBoletos,
    }
  
    const item = {
      evento: evento,
      montoTotal: this.montoTotal,
    }
  
    this.vistaPrincipalService.setCarritoService(item);
  }
}
