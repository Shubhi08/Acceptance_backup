import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { DatePipe } from '@angular/common';




import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { QuotaComponent } from './quota/quota.component';
import { QuotaService } from './quota/quota.service';


@NgModule({
  declarations: [
    AppComponent,
    QuotaComponent,
    
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [DatePipe ,QuotaService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
