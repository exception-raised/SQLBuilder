import { TestBed } from '@angular/core/testing';

import { SQLBuilderService } from './sqlbuilder.service';

describe('SQLBuilderService', () => {
  let service: SQLBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SQLBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
