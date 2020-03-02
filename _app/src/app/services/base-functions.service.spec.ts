import { TestBed } from '@angular/core/testing';

import { BaseFunctionsService } from './base-functions.service';

describe('BaseFunctionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaseFunctionsService = TestBed.get(BaseFunctionsService);
    expect(service).toBeTruthy();
  });
});
