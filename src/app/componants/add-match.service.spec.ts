import { TestBed } from '@angular/core/testing';

import { AddMatchService } from './add-match.service';

describe('AddMatchService', () => {
  let service: AddMatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddMatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
