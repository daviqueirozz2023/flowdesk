import { Routes } from '@angular/router';



import { Dashboard } from './features/dashboard/dashboard';
import { Projects } from './features/projects/projects';
import { Clients } from './features/clients/clients';
import { Tasks } from './features/tasks/tasks';
import { Team } from './features/team/team';
import { Settings } from './features/settings/settings';
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
        path: 'clients',
        component: Clients,
        data: {
          eyebrow: 'Relacionamento',
          title: 'Clientes',
        },
      },
      {
        path: 'tasks',
        component: Tasks,
        data: {
          eyebrow: 'Operação',
          title: 'Tarefas',
        },
      },
      {
        path: 'team',
        component: Team,
        data: {
          eyebrow: 'Pessoas',
          title: 'Equipe',
        },
      },
      {
        path: 'settings',
        component: Settings,
        data: {
          eyebrow: 'Sistema',
          title: 'Configurações',
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