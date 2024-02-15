import { TestBed } from '@angular/core/testing';

import { InfoaccountService } from './infoaccount.service';

describe('InfoaccountService', () => {
  let service: InfoaccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoaccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
