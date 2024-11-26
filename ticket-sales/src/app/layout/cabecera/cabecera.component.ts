import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeModule } from 'src/app/prime.module';
import { AuthService } from 'src/app/modulos/login/service/auth.service';
import { RouterModule, Router } from '@angular/router';
import { ModalComponent } from 'src/app/componentes/modal/modal.component';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css'],
  imports: [CommonModule, RouterModule, PrimeModule, ModalComponent],
  standalone: true,
})
export class HeaderComponent {
  public items: any;
  public endeLogoPath: string;
  public themeIcon: string;
  public themeMode: boolean;
  constructor() {}

  public setThemeMode(themeMode: boolean) {
    this.themeMode = themeMode;
  }

  public openModal(modal: ModalComponent) {
    modal.openModal();
  }
}
