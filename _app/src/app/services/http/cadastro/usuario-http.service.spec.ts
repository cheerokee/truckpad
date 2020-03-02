import { TestBed } from '@angular/core/testing';

import { UsuarioHttpService } from "./usuario-http.service";

describe('UsuarioHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsuarioHttpService = TestBed.get(UsuarioHttpService);
    expect(service).toBeTruthy();
  });
});
