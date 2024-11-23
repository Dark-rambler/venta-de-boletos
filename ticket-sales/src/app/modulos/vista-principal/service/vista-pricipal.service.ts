import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
const PROMOPATH = 'promo';
const EVENTOPATH = 'evento';

@Injectable({
  providedIn: 'root'
})
export class VistaPricipalService {
  constructor(private firestore: Firestore) { }

  private _collections = collection(this.firestore, PROMOPATH);
  private _collectionsEvento = collection(this.firestore, EVENTOPATH);

  carritoService: any = {
    items: [],
    amount: 0
  };

  public getPromos() {
    return collectionData(this._collections) as Observable<any>;
  }

  public getEventos() {
    return collectionData(this._collectionsEvento) as Observable<any>;
  }

  public postEvento() {
    let evento = {
      name: 'Evento 1',
      description: 'Evento 1 description',
      price: 200,
      image: 'https://via.placeholder.com/150',
    };
    return addDoc(this._collectionsEvento,evento) ;
  }

  public postPromo(promos: any) {
    let promo = {
      name: 'Promo 1',
      description: 'Promo 1 description',
      price: 100,
      image: 'https://via.placeholder.com/150',
    };
    return addDoc(this._collections,promo);
  }

  setCarritoLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(this.carritoService));
  }

  getCarritoLocalStorage() {
    this.carritoService = JSON.parse(localStorage.getItem('carrito') || '{}');
  }

}
