import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarsratingComponent } from './starsrating.component';

describe('StarsratingComponent', () => {
  let component: StarsratingComponent;
  let fixture: ComponentFixture<StarsratingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarsratingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarsratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
