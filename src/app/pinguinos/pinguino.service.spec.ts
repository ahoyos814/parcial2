/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PinguinoService } from './pinguino.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Pinguino', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PinguinoService]
    });
  });

  it('should ...', inject([PinguinoService], (service: PinguinoService) => {
    expect(service).toBeTruthy();
  }));
});
