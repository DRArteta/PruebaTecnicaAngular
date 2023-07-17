import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostListComponent } from './components/post-list/post-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'posts', component: PostListComponent },
  { path: 'post-form', component: PostFormComponent },
  { path: 'post-form/:id', component: PostFormComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
