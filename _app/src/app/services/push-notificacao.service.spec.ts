import { TestBed } from '@angular/core/testing';

import { PushNotificacaoService } from './push-notificacao.service';

describe('PushNotificacaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PushNotificacaoService = TestBed.get(PushNotificacaoService);
    expect(service).toBeTruthy();
  });
});
