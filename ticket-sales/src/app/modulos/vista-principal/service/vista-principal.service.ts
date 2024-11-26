import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { addDoc, collection, collectionData, doc, Firestore, getDoc } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { Carrito } from 'src/app/interfaces/carrito.interface';
import { Evento } from 'src/app/interfaces/evento.interface';
import { Promo } from 'src/app/interfaces/promo.interface';
const PROMOPATH = 'promo';
const EVENTOPATH = 'evento';

@Injectable({
  providedIn: 'root'
})
export class VistaPrincipalService {

  constructor(private firestore: Firestore) { }

  private _collections = collection(this.firestore, PROMOPATH);
  private _collectionsEvento = collection(this.firestore, EVENTOPATH);
  private carritoService: BehaviorSubject<Carrito> = new BehaviorSubject<Carrito>({} as Carrito);



  public getCarritoService(): Observable<Carrito> {
    return this.carritoService.asObservable();
  }

  public setCarritoService(carrito: Carrito): void {
    this.carritoService.next(carrito);
    this.setCarritoLocalStorage();
  }

  public getPromos() {
    return collectionData(this._collections, { idField: 'id' }) as Observable<Promo[]>;
  }

  public getEventos() {
    return collectionData(this._collectionsEvento, { idField: 'id' }) as Observable<Evento[]>;
  }

  public getEventoById(id: string): Observable<Evento | undefined> {
    const eventoDocRef = doc(this.firestore, `${EVENTOPATH}/${id}`);

    return new Observable<Evento | undefined>((observer) => {
      getDoc(eventoDocRef).then((docSnap) => {
        if (docSnap.exists()) {
          const eventoData = docSnap.data() as Evento;
          observer.next(eventoData);
        } else {
          observer.next(undefined);
        }
        observer.complete();
      }).catch((error) => {
        observer.error(error);
      });
    });
  }

  public getPromoById(id: string): Observable<Promo | undefined> {
    const promoDocRef = doc(this.firestore, `${PROMOPATH}/${id}`);

    return new Observable<Promo | undefined>((observer) => {
      getDoc(promoDocRef).then((docSnap) => {
        if (docSnap.exists()) {
          const promoData = docSnap.data() as Promo;
          observer.next(promoData);
        } else {
          observer.next(undefined);
        }
        observer.complete();
      }).catch((error) => {
        observer.error(error);
      });
    });
  }

  public postEvento() {
    let evento: Evento = {
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
    return addDoc(this._collectionsEvento, evento);
  }

  public postPromo() {
    let promo: Promo = {
      nombre: 'Peliculas de terror',
      descripcion: 'Disfruta de las mejores peliculas de terror en el cine de la ciudad con tus amigos y familiares descuento del 50%',
      precio: 100,
      imagen: 'https://img.freepik.com/psd-gratis/plantilla-banner-festival-musica-rock_23-2148971252.jpg',
      fecha: '10/06/2025',
      boletos: 1000,
      lugar: 'Estadio de la ciudad',
      categoria: 'Pelicula',
      descuento: 50,
      fechaFin: '10/06/2025',
      fechaInicio: '10/06/2024'
    };
    return addDoc(this._collections, promo);
  }

  public setCarritoLocalStorage() {
    console.log(this.carritoService);

    localStorage.setItem('carrito', JSON.stringify(this.carritoService));
  }

  public getCarritoLocalStorage() {
    this.carritoService = JSON.parse(localStorage.getItem('carrito') || '{}');
  }

}
