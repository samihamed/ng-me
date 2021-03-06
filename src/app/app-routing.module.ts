import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainViewComponent } from './pages/main-view.component';

const routes: Routes = [
  {
    path: '',
    component: MainViewComponent,
    children: [
      {
        path: 'cv',
        loadChildren: './pages/cv/cv.module#CvModule',
      },
      {
        path: 'blog',
        loadChildren: './pages/blog/blog.module#BlogModule',
      },
      {
        path: 'connect',
        loadChildren: './pages/connect/connect.module#ConnectModule',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
