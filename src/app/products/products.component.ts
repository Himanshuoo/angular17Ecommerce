import { Component } from '@angular/core';
import { OnlineserviceService, IProd } from '../onlineservice.service';
import { DiscountPipe } from '../discount.pipe';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers :[OnlineserviceService]
})
export class ProductsComponent {
  prod:IProd[]=[];
  exist =true;
  pid:any;

     Unhide(){
      this.exist = !this.exist;
     }
//using activated route you can read query string fromm the current url
constructor(public obj:OnlineserviceService){



//this.prod = obj.prod;
obj.showproduct().subscribe(result => this.prod  = result )
}
}

         