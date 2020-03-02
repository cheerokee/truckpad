import { TestBed } from '@angular/core/testing';

import { UsuarioPerfilHttpService } from './usuario-perfil-http.service';

describe('UsuarioPerfilHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsuarioPerfilHttpService = TestBed.get(UsuarioPerfilHttpService);
    expect(service).toBeTruthy();
  });
});
