import { TestBed } from '@angular/core/testing';

import { AcaoHttpService } from "./acao-http.service";

describe('AcaoHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AcaoHttpService = TestBed.get(AcaoHttpService);
    expect(service).toBeTruthy();
  });
});
