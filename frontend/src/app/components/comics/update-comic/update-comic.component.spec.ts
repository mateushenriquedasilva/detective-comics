import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateComicComponent } from './update-comic.component';

describe('UpdateComicComponent', () => {
  let component: UpdateComicComponent;
  let fixture: ComponentFixture<UpdateComicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateComicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
