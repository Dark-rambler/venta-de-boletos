import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PrimeModule } from 'src/app/prime.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [CommonModule, RouterModule, PrimeModule],
  standalone: true,
})
export class HeaderComponent implements OnInit {
  public items: any;
  public endeLogoPath: string;
  public themeIcon: string;
  public themeMode: boolean;
  constructor(
  ) {}

  private menuItems: Object = [
    {
      label: 'Parámetros',
      icon: 'pi pi-fw pi-file',
      items: [
        {
          label: 'Actividad',
          icon: 'pi pi-fw pi-file',
          routerLink: ['/activities'],
        },
        {
          label: 'Programas',
          icon: 'pi pi-fw pi-file',
          routerLink: ['/programs'],
        },
        {
          label: 'Sector',
          icon: 'pi pi-fw pi-file',
          routerLink: ['/sectors'],
        },
        {
          label: 'Subsector',
          icon: 'pi pi-fw pi-file',
          routerLink: ['/subsectors'],
        },
        {
          label: 'Tipo presupuesto',
          icon: 'pi pi-fw pi-file',
          routerLink: ['/budget-types'],
        },
        {
          label: 'Actividades Económicas',
          icon: 'pi pi-fw pi-file',
          routerLink: ['/economic-activities'],
        },
        {
          label: 'Organismos Financiadores',
          icon: 'pi pi-fw pi-file',
          routerLink: ['/funding-organizations'],
        },
        {
          label: 'Fuente de financiamiento',
          icon: 'pi pi-fw pi-file',
          routerLink: ['/funding-sources'],
        },
        {
          label: 'Proyectos',
          icon: 'pi pi-fw pi-file',
          routerLink: ['/projects'],
        },
        {
          label: 'Categorias Programáticas',
          icon: 'pi pi-fw pi-file',
          routerLink: ['/programmatic-categories'],
        },
        {
          label: 'Partidas presupuestarias',
          icon: 'pi pi-fw pi-file',
          routerLink: ['/budget-items'],
        },
        {
          label: 'Formulación presupuestaria',
          icon: 'pi pi-fw pi-file',
          routerLink: ['/budget-formulations'],
        }
      ]
    },

    {
      label: 'Procesos',
      icon: 'pi pi-fw pi-file',
      items: [],
    },
  ];

  public ngOnInit(): void {
    this.items = this.menuItems;
  }

  private setInitialValues(themeMode: boolean): void {
    this.setThemeMode(!themeMode);
  }

  public setThemeMode(themeMode: boolean) {
    this.themeMode = themeMode;
  }
}
