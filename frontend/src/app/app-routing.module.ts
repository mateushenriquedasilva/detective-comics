import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComicComponent } from './components/comics/create-comic/create-comic.component';
import { DeleteComicsComponent } from './components/comics/delete-comics/delete-comics.component';
import { UpdateComicComponent } from './components/comics/update-comic/update-comic.component';
import { ComicsComponent } from './views/comics/comics.component';
import { Error404Component } from './views/error404/error404.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'comics',
    component: ComicsComponent,
  },
  {
    path: "create_comic",
    component: CreateComicComponent
  },
  {
    path: "update_comic/:id",
    component: UpdateComicComponent
  },
  {
    path: "delete_comic/:id",
    component: DeleteComicsComponent
  },
  // error 404
  {
    path: '**',
    pathMatch: 'full',
    component: Error404Component,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
