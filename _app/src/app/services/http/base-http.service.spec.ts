import { TestBed } from '@angular/core/testing';

import { BaseHttpService } from './base-http.service';
import {Usuario} from "../../model";

describe('BaseHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaseHttpService<Usuario> = TestBed.get(BaseHttpService);
    expect(service).toBeTruthy();
  });
});
