import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Evento } from 'src/app/interfaces/evento.interface';
import { Promo} from 'src/app/interfaces/promo.interface';
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
    return collectionData(this._collections) as Observable<Promo[]>;
  }

  public getEventos() {
    return collectionData(this._collectionsEvento) as Observable<Evento[]>;
  }

  public postEvento() {
    let evento:Evento = {
      nombre: 'Concierto virtual de rock',
      descripcion: 'Por que puedes ser parte de el concierto desde la comodidad de tu hogar con tus amigos y familiares y disfrutar de la mejor musica de rock en vivo',
      precio: 100,
      // imagen: 'https://img.freepik.com/psd-gratis/plantilla-banner-festival-musica-rock_23-2148971252.jpg',
      imagen: 'https://img.freepik.com/psd-gratis/plantilla-banner-concierto-rock-virtual_23-2148974091.jpg',
      fecha: '10/06/2025',
      boletos: 1000,
      lugar: 'Online',
      categoria: 'Concierto virtual'
    };
    return addDoc(this._collectionsEvento,evento) ;
  }

  public postPromo() {
    let promo:Promo = {
      nombre: 'Concierto de Kpop',
      descripcion: 'Vive la experiencia de un concierto de Kpop en vivo con tus amigos y familiares en el estadio de la ciudad con un 10% de descuento',
      precio: 100,
      imagen: 'https://img.freepik.com/psd-gratis/plantilla-banner-festival-musica-rock_23-2148971252.jpg',
      fecha: '10/06/2025',
      boletos: 1000,
      lugar: 'Estadio de la ciudad',
      categoria: 'Concierto',
      descuento: 10,
      fechaFin: '10/06/2025',
      fechaInicio: '10/06/2024'
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
