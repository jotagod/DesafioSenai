import { TestBed } from '@angular/core/testing';

import { GuardaDashboardGuard } from './guarda-dashboard.guard';

describe('GuardaDashboardGuard', () => {
  let guard: GuardaDashboardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardaDashboardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
