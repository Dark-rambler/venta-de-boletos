import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';

export interface User {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}

  login(user: User) {
    return signInWithEmailAndPassword(this.auth, user.email, user.password);
  }
}
