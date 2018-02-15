import { Component, OnInit,Input} from '@angular/core';
import { QuotaService } from './quota.service';

import {Quota}     from '../model/models';

@Component({
  selector: 'app-quota',
  templateUrl: './quota.component.html',
  styleUrls: ['./quota.component.css']
})
export class QuotaComponent implements OnInit {
  @Input() vacationDate: string;
  @Input() id: string;

  quota:Quota;

  constructor(private service: QuotaService) { }

  ngOnInit() {
    this.service.leaveQuotaGet().subscribe((quota: Quota) => {

      // do stuff with our data here.
      // ....
      // asign data to our class property in the end
      // so it will be available to our template
      this.quota = quota
  });
  }





}
