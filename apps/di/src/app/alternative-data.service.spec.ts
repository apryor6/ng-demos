import { TestBed } from '@angular/core/testing';

import { AlternativeDataService } from './alternative-data.service';

describe('AlternativeDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlternativeDataService = TestBed.get(AlternativeDataService);
    expect(service).toBeTruthy();
  });
});
