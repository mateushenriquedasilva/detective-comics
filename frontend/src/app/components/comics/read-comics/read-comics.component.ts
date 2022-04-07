import { Component, OnInit } from '@angular/core';
import { Comic } from '../comics.model';
import { ComicsService } from '../comics.service';

@Component({
  selector: 'app-read-comics',
  templateUrl: './read-comics.component.html',
  styleUrls: ['./read-comics.component.scss'],
})
export class ReadComicsComponent implements OnInit{
  comics: Comic[] = [
    {
      name: '',
      author: '',
      date_of_publication: '',
      url_image: '',
    },
  ];

  destroyComponent: boolean = true;

  constructor(private comicService: ComicsService) {}

  ngOnInit(): void {
    this.comicService.findAllComics().subscribe((comics) => {
      this.comics = comics;
      comics.length === 0
        ? (this.destroyComponent = true)
        : (this.destroyComponent = false);
    });
  }
}
