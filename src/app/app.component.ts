import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { QuotaService } from './quota/quota.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuotaService]

})
export class AppComponent {
  title = 'app';
 
  fromDate :any;
  toDate:any;
  parentString;
  showQuotaPanel = false;
 

  constructor(){
   
    }
  showQuota() {
    if(this.fromDate != null && this.toDate != null){
    this.parentString =  new DatePipe('en-US').transform (this.fromDate,'EEEE, MMMM d, y')+ "  to  " + new DatePipe('en-US').transform (this.toDate,'EEEE, MMMM d, y');


    this.showQuotaPanel = true;
    }
  }

  hideQuota() {
    
    this.showQuotaPanel = false;
  }

  showdateinfo(){
      console.log(this.fromDate);
  }
}
