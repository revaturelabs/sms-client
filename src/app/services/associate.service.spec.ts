import { TestBed, inject } from '@angular/core/testing';

import { AssociateService } from './associate.service';

describe('AssociateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssociateService]
    });
  });

  it('should be created', inject([AssociateService], (service: AssociateService) => {
    expect(service).toBeTruthy();
  }));
});
