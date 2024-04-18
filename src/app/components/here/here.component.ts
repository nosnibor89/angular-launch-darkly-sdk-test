import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-here',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './here.component.html',
  styleUrl: './here.component.scss',
})
export class HereComponent {
  @Input({ required: true }) title!: string;

  @Input({required: true}) imageUrl!: string;
}
