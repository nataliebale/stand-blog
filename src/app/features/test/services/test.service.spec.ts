import { TestBed } from '@angular/core/testing';

import { TestService } from './test.service';

describe('TestService', () => {
  let service: TestService;

  beforeEach(() => {
    service = new TestService();
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have no messages to start', function () {
    expect(service.arr.length).toBe(0);
  });
});
