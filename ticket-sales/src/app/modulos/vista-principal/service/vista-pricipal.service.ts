import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VistaPricipalService {

  carritoService: any = {
    items: [],
    amount: 0
  };

  constructor(http: HttpClient) { }

  setCarritoLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(this.carritoService));
  }

  getCarritoLocalStorage() {
    this.carritoService = JSON.parse(localStorage.getItem('carrito') || '{}');
  }

}
