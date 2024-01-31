import { TestBed } from '@angular/core/testing';

import { LawyerCasesService } from './lawyer-cases.service';

describe('LawyerCasesService', () => {
  let service: LawyerCasesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LawyerCasesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
