import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) content!: string[];
}
