import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieandinfoComponent } from './movieandinfo.component';

describe('MovieandinfoComponent', () => {
  let component: MovieandinfoComponent;
  let fixture: ComponentFixture<MovieandinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieandinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieandinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
