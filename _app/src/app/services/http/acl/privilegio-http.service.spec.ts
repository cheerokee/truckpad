import { TestBed } from '@angular/core/testing';

import { PrivilegioHttpService } from './privilegio-http.service';

describe('PrivilegioHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrivilegioHttpService = TestBed.get(PrivilegioHttpService);
    expect(service).toBeTruthy();
  });
});
