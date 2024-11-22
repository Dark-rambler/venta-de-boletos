import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrimeModule } from 'src/app/prime.module';

@Component({
  selector: 'app-vista-principal',
  templateUrl: './vista-principal.component.html',
  styleUrls: ['./vista-principal.component.css'],
  standalone: true,
  imports: [RouterModule, PrimeModule, CommonModule],
})
export default class VistaPrincipalComponent {

}
