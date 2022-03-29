import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comic } from '../comics.model';
import { ComicsService } from '../comics.service';

@Component({
  selector: 'app-update-comic',
  templateUrl: './update-comic.component.html',
  styleUrls: ['./update-comic.component.scss'],
})
export class UpdateComicComponent implements OnInit {
  comic: Comic = {
    name: '',
    author: '',
    date_of_publication: '',
    url_image: '',
  };

  constructor(
    private router: Router,
    private comicService: ComicsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.comicService.findComicById(id).subscribe((comic) => {
        this.comic = {
          name: comic[0].name,
          author: comic[0].author,
          date_of_publication: comic[0].date_of_publication,
          url_image: comic[0].url_image,
        };
      });
    }
  }

  updateComic(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      if (
        this.comic.name === '' ||
        this.comic.author === '' ||
        this.comic.date_of_publication === '' ||
        this.comic.url_image === ''
      ) {
        this.comicService.showMessage('Preencha todos os campos!', true);
      } else {
        this.comicService.updateComic(id, this.comic).subscribe(() => {
          this.comicService.showMessage('Quadrinho atualizado com sucesso!');
          this.router.navigate(['comics']);
        });
      }
    }
  }

  cancel(): void {
    this.router.navigate(['comics']);
  }
}
