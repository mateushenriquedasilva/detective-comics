import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comic } from '../comics.model';
import { ComicsService } from '../comics.service';

@Component({
  selector: 'app-delete-comics',
  templateUrl: './delete-comics.component.html',
  styleUrls: ['./delete-comics.component.scss'],
})
export class DeleteComicsComponent implements OnInit {
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

  deleteComic(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.comicService.deleteComic(id).subscribe(() => {
        this.comicService.showMessage('Quadrinho apagado com sucesso!');
        this.router.navigate(['/comics']);
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/comics']);
  }
}
