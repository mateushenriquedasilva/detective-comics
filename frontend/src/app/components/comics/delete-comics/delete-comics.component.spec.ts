import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteComicsComponent } from './delete-comics.component';

describe('DeleteComicsComponent', () => {
  let component: DeleteComicsComponent;
  let fixture: ComponentFixture<DeleteComicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteComicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
