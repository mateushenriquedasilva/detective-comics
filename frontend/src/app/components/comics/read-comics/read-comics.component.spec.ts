import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadComicsComponent } from './read-comics.component';

describe('ReadComicsComponent', () => {
  let component: ReadComicsComponent;
  let fixture: ComponentFixture<ReadComicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadComicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
