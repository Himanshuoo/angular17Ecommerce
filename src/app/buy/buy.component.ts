import { Component } from '@angular/core';
import { OnlineserviceService } from '../onlineservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrl: './buy.component.css',
  providers:[OnlineserviceService]
})
export class BuyComponent {
  pid :any;
  pname:any
  price:any
  pimage:any
  hello:string=""
  qty:number =0;
//using activated route you can read query string fromm the current url
  result:string="";
constructor( public ob:OnlineserviceService, public r:ActivatedRoute){


  r.queryParamMap.subscribe(result => {
    this.pid=result.get('a')
   this.pname=result.get('b')
   this.price=result.get('d')
   this.pimage=result.get('c')
   })
}

placeorder(data:any)
{

  var res={
    username:sessionStorage.getItem("u"),
        pid:this.pid,
        transdate:new Date(),
        qty:this.qty
  }
  this.ob.buy(res).subscribe((c: { message: any; })=> alert(c.message))

}


}
