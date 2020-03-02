import { TestBed } from '@angular/core/testing';

import { PossibilidadeHttpService } from "./possibilidade-http.service";

describe('PossibilidadeHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PossibilidadeHttpService = TestBed.get(PossibilidadeHttpService);
    expect(service).toBeTruthy();
  });
});
