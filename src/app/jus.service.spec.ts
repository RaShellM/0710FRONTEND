import { TestBed } from '@angular/core/testing';

import { JusService } from './jus.service';

describe('JusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JusService = TestBed.get(JusService);
    expect(service).toBeTruthy();
  });
});
