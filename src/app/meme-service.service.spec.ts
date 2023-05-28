import { TestBed } from '@angular/core/testing';

import { MemeServiceService } from './meme-service.service';

describe('MemeServiceService', () => {
  let service: MemeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
