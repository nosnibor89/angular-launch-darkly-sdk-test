import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, Routes, UrlTree } from '@angular/router';
import { EducationalLayoutComponentComponent } from './layouts/educational-layout-component/educational-layout-component.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'educational',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'educational',
    component: EducationalLayoutComponentComponent,
    canActivateChild: [isAuthenticated],

    children: [
      { path: '', redirectTo: 'hs', pathMatch: 'full' },
      {
        path: ':program',
        loadComponent: () =>
          import(
            './pages/educational/education-page/education-page.component'
          ).then((m) => m.EducationHsPageComponent),
      },
    ],
  },
];


function isAuthenticated(route: ActivatedRouteSnapshot , state: RouterStateSnapshot) {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.isAuthenticated()) {
    return true;
  }

  return router.parseUrl('/login');
}
