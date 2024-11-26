import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { RouterModule } from '@angular/router';
import { Evento } from 'src/app/interfaces/evento.interface';
import { VistaPrincipalService } from 'src/app/modulos/vista-principal/service/vista-principal.service';
import { PrimeModule } from 'src/app/prime.module';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  imports: [CommonModule, RouterModule, PrimeModule],
  standalone: true,
})
export class ModalComponent {
  constructor(
    private vistaPrincipalService: VistaPrincipalService
  ) {}

  public visible = false;
  public total = 0;
  public eventos: Evento[] = [];

  ngOnInit() {
    this.loadEventos();
  }

  loadEventos() {
    const storedData = localStorage.getItem('carrito');
    if (storedData) {
      this.eventos = JSON.parse(storedData).items;
      this.total = JSON.parse(storedData).montoTotal;
    }
  }

  openModal() {
    this.visible = true;
  }

  closeModal() {
    this.visible = false;
  }

  comprar() {
    const storedData = localStorage.getItem('carrito');
    if (storedData) {
      this.vistaPrincipalService.postCarrito(JSON.parse(storedData))
      this.closeModal();
    }
  }
}
