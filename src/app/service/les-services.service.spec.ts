import { TestBed } from '@angular/core/testing';

import { LesServicesService } from './les-services.service';

describe('LesServicesService', () => {
  let service: LesServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LesServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
