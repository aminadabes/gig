import { TestBed } from '@angular/core/testing';

import { TesourariaService } from './tesouraria.service';

describe('TesourariaService', () => {
  let service: TesourariaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TesourariaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
