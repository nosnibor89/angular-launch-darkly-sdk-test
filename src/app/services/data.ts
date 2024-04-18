export enum ComponentNames {
  ArticleComponent = 'ArticleComponent',
  FormComponent = 'FormComponent',
  HereComponent = 'HereComponent',
}

export enum Pages {
  ms = 'ms',
  hs = 'hs',
}

interface PageNode {
  component: ComponentNames
  inputs?: Record<string, any>
}

export const data : Record<Pages, PageNode[]>= {
  ms: [
    {
      component: ComponentNames.HereComponent,
      inputs: {
        title: 'MiddleSchool',
        imageUrl: 'https://img.freepik.com/premium-vector/men-women-travelers-with-backpacks-various-situations_200075-1536.jpg?w=1380'
      },
    },
    {
      component: ComponentNames.ArticleComponent,
      inputs: {
        title: 'How Middle School Works',
        content: [
          'Middle school is a transitional stage for students. It is a time when they are no longer considered children, but not yet adults. They are expected to take on more responsibility and make more decisions for themselves.',
          'Middle school students are typically between the ages of 11 and 14 years old. They are in the process of developing their own identities and figuring out who they are as individuals.',
          'Middle school is a time of great change and growth. Students are exposed to new ideas and experiences that help shape their views of the world.',
        ],
      },
    },
    {
      component: ComponentNames.FormComponent,
    },
  ],
  hs: [
    {
      component: ComponentNames.HereComponent,
      inputs: {
        title: 'HighSchool',
        imageUrl: 'https://thumbs.dreamstime.com/z/high-school-building-vector-classic-flat-cartoon-illustration-isolated-140113670.jpg?w=992'
      },
    },
    {
      component: ComponentNames.ArticleComponent,
      inputs: {
        title: 'What about High School?',
        content: [
          'High school is a time of great change and growth. Students are exposed to new ideas and experiences that help shape their views of the world.',
          'High school students are typically between the ages of 14 and 18 years old. They are in the process of developing their own identities and figuring out who they are as individuals.',
          'High school is a time when students are expected to take on more responsibility and make more decisions for themselves. They are no longer considered children, but not yet adults.',
        ],
      },
    },
    {
      component: ComponentNames.FormComponent,
    },
  ],
};
