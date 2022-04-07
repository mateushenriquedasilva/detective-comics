import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// views
import { HomeComponent } from './home/home.component';
import { ComicsComponent } from './comics/comics.component';
import { Error404Component } from './error404/error404.component';

// material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

// module
import { ComicsModule } from '../components/comics/comics.module';

@NgModule({
  declarations: [HomeComponent, ComicsComponent, Error404Component],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    ComicsModule,
  ],
  exports: [HomeComponent, ComicsComponent, Error404Component],
})
export class ComicsViewsModule {}
