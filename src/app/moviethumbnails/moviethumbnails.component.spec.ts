import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviethumbnailsComponent } from './moviethumbnails.component';

describe('MoviethumbnailsComponent', () => {
  let component: MoviethumbnailsComponent;
  let fixture: ComponentFixture<MoviethumbnailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviethumbnailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviethumbnailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
