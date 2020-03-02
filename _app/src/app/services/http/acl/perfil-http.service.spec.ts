import { TestBed } from '@angular/core/testing';

import { PerfilHttpService } from "./perfil-http.service";

describe('PerfilHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PerfilHttpService = TestBed.get(PerfilHttpService);
    expect(service).toBeTruthy();
  });
});
