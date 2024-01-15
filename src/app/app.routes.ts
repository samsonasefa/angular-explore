import { Routes } from '@angular/router';

import { DetailPageComponent } from './detail-page/detail-page.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details',
  },
  {
    path: 'detail_page/:id',
    component: DetailPageComponent,
    title: 'Detail page',
  },
];
