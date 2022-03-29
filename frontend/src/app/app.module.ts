import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import localeBr from '@angular/common/locales/pt';

// components
import { HomeComponent } from './views/home/home.component';
import { ComicsComponent } from './views/comics/comics.component';
import { Error404Component } from './views/error404/error404.component';
import { CreateComicComponent } from './components/comics/create-comic/create-comic.component';

// material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReadComicsComponent } from './components/comics/read-comics/read-comics.component';
import { UpdateComicComponent } from './components/comics/update-comic/update-comic.component';
import { DeleteComicsComponent } from './components/comics/delete-comics/delete-comics.component';

registerLocaleData(localeBr, 'pt')
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ComicsComponent,
    Error404Component,
    CreateComicComponent,
    ReadComicsComponent,
    UpdateComicComponent,
    DeleteComicsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'pt'
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
