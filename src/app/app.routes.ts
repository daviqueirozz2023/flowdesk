import { Routes } from '@angular/router';

import { Dashboard } from './features/dashboard/dashboard';
import { Projects } from './features/projects/projects';
import { MainLayout } from './layout/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: 'dashboard',
        component: Dashboard,
        data: {
          eyebrow: 'Visão geral',
          title: 'Dashboard',
        },
      },
      {
        path: 'projects',
        component: Projects,
        data: {
          eyebrow: 'Gestão',
          title: 'Projetos',
        },
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];