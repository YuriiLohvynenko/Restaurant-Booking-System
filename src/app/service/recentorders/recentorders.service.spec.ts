import { TestBed } from '@angular/core/testing';

import { RecentordersService } from './recentorders.service';

describe('RecentordersService', () => {
  let service: RecentordersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecentordersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
