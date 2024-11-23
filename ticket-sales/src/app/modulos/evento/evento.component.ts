import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-evento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export default class EventoComponent {
  productId!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.productId = params.get('id')!;
      console.log(`Product ID: ${this.productId}`);
    });
  }
}
