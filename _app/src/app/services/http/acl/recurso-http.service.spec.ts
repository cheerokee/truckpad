import { TestBed } from '@angular/core/testing';

import { RecursoHttpService } from './recurso-http.service';

describe('RecursoHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecursoHttpService = TestBed.get(RecursoHttpService);
    expect(service).toBeTruthy();
  });
});
