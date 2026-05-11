import { Routes } from '@angular/router';

export const DASHBOARD_ROUTES: Routes = [
<<<<<<< HEAD
  {
    path: '',
    loadComponent: () =>
      import('./pages/dashboard.component').then(m => m.DashboardComponent),

    children: [
      {
        path: '',
        loadComponent: () =>
          import('./components/home/home').then(m => m.HomeComponent)
      },

      {
        path: 'home',
        loadComponent: () =>
          import('./components/home/home').then(m => m.HomeComponent)
      },

      {
        path: 'category',
        loadChildren: () =>
          import('../category/category-module').then(m => m.CategoryModule)
      },

      {
        path: 'product',
        loadChildren: () =>
          import('../product/product-module').then(m => m.ProductModule)
      }
    ]
  }
=======
    {
        path: '',
        loadComponent: () =>
            import('./pages/dashboard.component').then(m => m.DashboardComponent),
        children: [
            {
                path: '',
                loadComponent: () =>
                    import('./components/home/home').then(m => m.HomeComponent)
            },
            {
                path: 'home',
                loadComponent: () =>
                    import('./components/home/home').then(m => m.HomeComponent)
            }
        ]
    }
>>>>>>> 2bbccb1dc63647eab3ac8ed41b196faca291417f
];