import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { GithubComponent } from './components/github/github.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PostsComponent } from './components/posts/posts.component';

const APP_ROUTES: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: 'blog-post', component: PostsComponent },
      { path: 'github', component: GithubComponent },
      { path: 'about', component: AboutComponent },
    ]
  },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
