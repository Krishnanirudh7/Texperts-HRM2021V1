import { TestBed } from '@angular/core/testing';

import { ChariotHttpService } from './chariot-http.service';

describe('ChariotHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChariotHttpService = TestBed.get(ChariotHttpService);
    expect(service).toBeTruthy();
  });
});
