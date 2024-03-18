import { TestBed } from '@angular/core/testing';

import { DocrotService } from './docrot.service';

describe('DocrotService', () => {
  let service: DocrotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocrotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
