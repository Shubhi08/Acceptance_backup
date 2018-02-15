import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }                        from '@angular/platform-browser';
import { QuotaService } from './quota.service';
import { QuotaComponent } from './quota.component';
import { AppComponent } from '../app.component';
import { DebugElement } from '@angular/core';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';
describe('QuotaComponent', () => {
  let component: QuotaComponent;
  let fixture: ComponentFixture<QuotaComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let quotaService: QuotaService;
  const testquota = 'Quota : slots available';
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule,FormsModule],
      declarations: [ QuotaComponent,AppComponent ],
      providers: [QuotaService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule,FormsModule],
      declarations: [ QuotaComponent,AppComponent ],
      providers: [QuotaService]
   });
    fixture = TestBed.createComponent(QuotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();


  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should show Quota after leaveQuotaGet promise (async)', async(() => {
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(el.textContent).toBe(testquota);
    });
  }));
});
