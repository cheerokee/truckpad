import { TestBed } from '@angular/core/testing';

import { MotoristaHttpService } from './motorista-http.service';

describe('MotoristaHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MotoristaHttpService = TestBed.get(MotoristaHttpService);
    expect(service).toBeTruthy();
  });
});
