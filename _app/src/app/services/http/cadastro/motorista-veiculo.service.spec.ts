import { TestBed } from '@angular/core/testing';

import { MotoristaVeiculoService } from './motorista-veiculo.service';

describe('MotoristaVeiculoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MotoristaVeiculoService = TestBed.get(MotoristaVeiculoService);
    expect(service).toBeTruthy();
  });
});
