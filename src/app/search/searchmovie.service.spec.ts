import { TestBed, inject } from '@angular/core/testing';

import { SearchmovieService } from './searchmovie.service';

describe('SearchmovieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchmovieService]
    });
  });

  it('should be created', inject([SearchmovieService], (service: SearchmovieService) => {
    expect(service).toBeTruthy();
  }));
});
