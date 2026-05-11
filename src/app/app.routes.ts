import { Routes } from '@angular/router';

export const routes: Routes = [
<<<<<<< HEAD
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES)
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];
=======
    {
        path: 'dashboard',
        loadChildren: () =>
            import('./modules/dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES)
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }
];
>>>>>>> 2bbccb1dc63647eab3ac8ed41b196faca291417f
