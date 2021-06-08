import { TestBed } from '@angular/core/testing';

import { CurrecnciesCodeService } from './currecncies-code.service';

describe('CurrecnciesCodeService', () => {
  let service: CurrecnciesCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrecnciesCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
