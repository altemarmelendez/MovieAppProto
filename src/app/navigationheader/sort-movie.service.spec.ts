import { TestBed, inject } from '@angular/core/testing';

import { SortMovieService } from './sort-movie.service';

describe('SortMovieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SortMovieService]
    });
  });

  it('should be created', inject([SortMovieService], (service: SortMovieService) => {
    expect(service).toBeTruthy();
  }));
});
