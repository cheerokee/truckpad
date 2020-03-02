import { TestBed } from '@angular/core/testing';

import { ConfiguracaoHttpService } from "./configuracao-http.service";

describe('ConfiguracaoHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfiguracaoHttpService = TestBed.get(ConfiguracaoHttpService);
    expect(service).toBeTruthy();
  });
});
