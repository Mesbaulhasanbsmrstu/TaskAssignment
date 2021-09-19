import { TestBed } from '@angular/core/testing';

import { TadaService } from './tada.service';

describe('TadaService', () => {
  let service: TadaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TadaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
