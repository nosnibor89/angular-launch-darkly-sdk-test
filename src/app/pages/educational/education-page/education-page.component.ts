import { Component, Input } from '@angular/core';
import {  CommonModule, NgComponentOutlet } from '@angular/common';
import { HereComponent } from '../../../components/here/here.component';
import { ArticleComponent } from '../../../components/article/article.component';
import { FormComponent } from '../../../components/form/form.component';
import { BuilderService } from '../../../services/builder.service';
import { Pages } from '../../../services/data';
import { LaunchDarklyService } from '../../../launchdarkly/launchdarkly.service';

@Component({
  selector: 'app-education-hs-page',
  standalone: true,
  imports: [NgComponentOutlet, ArticleComponent, HereComponent, FormComponent, CommonModule],
  templateUrl: './education-page.component.html',
  styleUrl: './education-page.component.scss',
})
export class EducationHsPageComponent {
  componentTree?: ReturnType<BuilderService['build']>;
  testSignal: ReturnType<BuilderService['count']>;
  shouldShowTags: ReturnType<LaunchDarklyService['watch']>;



  @Input()
  set program(value: string) {
    this.componentTree = this.builder.build(value as Pages);
  }

  // ngOnInit() {

  //   this.shouldShowTags = this.ld.watch('feature-shows-tags')
  // }


  constructor(private readonly builder: BuilderService, public readonly ld: LaunchDarklyService) {
    // this.componentTree = this.builder.build(Pages.hs);
    // console.log(this.componentTree);
    this.testSignal = this.builder.count();
    this.shouldShowTags = this.ld.watch('feature-shows-tags')
  }

  testIncrement() {
    this.builder.increment();
  }
}
