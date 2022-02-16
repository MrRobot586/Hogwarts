import { TestBed } from '@angular/core/testing';

import { HpApiServiceService } from './hp-api-service.service';

describe('HpApiServiceService', () => {
  let service: HpApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HpApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
