import { TestBed } from '@angular/core/testing';

import { FlistService } from './flist.service';

describe('FlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlistService = TestBed.get(FlistService);
    expect(service).toBeTruthy();
  });
});
