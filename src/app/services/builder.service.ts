import { Injectable } from '@angular/core';
import { ComponentNames, Pages, data } from './data';
import { HereComponent } from '../components/here/here.component';
import { ArticleComponent } from '../components/article/article.component';
import { FormComponent } from '../components/form/form.component';

const componentsMap = {
  [ComponentNames.HereComponent]: HereComponent,
  [ComponentNames.ArticleComponent]: ArticleComponent,
  [ComponentNames.FormComponent]: FormComponent,
};

@Injectable({
  providedIn: 'root',
})
export class BuilderService {
  constructor() {}

  build(page: Pages) {
    if (!data[page]) {
      throw new Error(`Page ${page} not found`);
    }

    const pageData = data[page];

    return {
      tree: pageData.map((node) => {
        return {
          component: componentsMap[node.component],
          inputs: node.inputs,
        };
      }),
    };
  }
}
