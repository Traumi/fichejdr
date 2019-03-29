import { TestBed } from '@angular/core/testing';

import { NightModeService } from './night-mode.service';

describe('NightModeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NightModeService = TestBed.get(NightModeService);
    expect(service).toBeTruthy();
  });
});
