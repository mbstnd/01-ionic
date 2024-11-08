import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'tasks',
    loadComponent: () => import('./tasks/tasks.page').then((m) => m.TasksPage),
  },
  { path: '**', redirectTo: 'home' },
];
