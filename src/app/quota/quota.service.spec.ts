import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { QuotaService } from './quota.service';

describe('QuotaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [QuotaService]
    });
  });

  it('should be created', inject([QuotaService], (service: QuotaService) => {
    expect(service).toBeTruthy();
  }));
});
