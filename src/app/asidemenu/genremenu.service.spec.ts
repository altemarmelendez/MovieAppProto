import { TestBed, inject } from '@angular/core/testing';

import { GenremenuService } from './genremenu.service';

describe('GenremenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenremenuService]
    });
  });

  it('should be created', inject([GenremenuService], (service: GenremenuService) => {
    expect(service).toBeTruthy();
  }));
});
