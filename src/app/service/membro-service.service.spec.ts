import { TestBed } from '@angular/core/testing';

import { MembroServiceService } from './membro-service.service';

describe('MembroServiceService', () => {
  let service: MembroServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MembroServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
