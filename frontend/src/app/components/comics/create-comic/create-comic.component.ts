import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comic } from '../comics.model';
import { ComicsService } from '../comics.service';

@Component({
  selector: 'app-create-comic',
  templateUrl: './create-comic.component.html',
  styleUrls: ['./create-comic.component.scss'],
})
export class CreateComicComponent  {
  comic: Comic = {
    name: '',
    author: '',
    date_of_publication: '',
    url_image: '',
  };

  constructor(private router: Router, private comicsService: ComicsService) {}

  // create comic
  createComic(): void {
    if (
      this.comic.name === '' ||
      this.comic.author === '' ||
      this.comic.date_of_publication === '' ||
      this.comic.url_image === ''
    ) {
      this.comicsService.showMessage('Preencha todos os campos!', true);
    } else {
      this.comicsService.createComic(this.comic).subscribe(() => {
        this.comicsService.showMessage('Quadrinho criado com sucesso!');
      });
      this.router.navigate(['/comics']);
    }
  }

  cancel(): void {
    this.router.navigate(['/comics']);
  }
}
