import { TestBed } from '@angular/core/testing';

import { ArtistService } from './artists.service';

describe('ArtistsService', () => {
  let service: ArtistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
