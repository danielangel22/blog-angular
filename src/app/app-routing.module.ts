import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { MenuComponent } from './components/menu/menu.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const APP_ROUTES: Routes = [
  {
    path: 'index', component: AppComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'menu', component: MenuComponent
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
