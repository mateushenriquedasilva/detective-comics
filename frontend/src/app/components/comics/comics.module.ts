import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// components
import { CreateComicComponent } from './create-comic/create-comic.component';
import { ReadComicsComponent } from './read-comics/read-comics.component';
import { UpdateComicComponent } from './update-comic/update-comic.component';
import { DeleteComicsComponent } from './delete-comics/delete-comics.component';

// material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    CreateComicComponent,
    ReadComicsComponent,
    UpdateComicComponent,
    DeleteComicsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    RouterModule,
  ],
  exports: [
    CreateComicComponent,
    ReadComicsComponent,
    UpdateComicComponent,
    DeleteComicsComponent,
  ],
})
export class ComicsModule {}
