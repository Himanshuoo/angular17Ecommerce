import { Component, DoCheck } from '@angular/core';
import { IProd, OnlineserviceService } from '../onlineservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements DoCheck {
  exist =true
  prod1:IProd[]=[];
  prod:IProd[]=[];
  data:any;
  constructor(public p:OnlineserviceService, public r:ActivatedRoute){
    this.prod1 = p.prod;
 

}
  ngDoCheck(): void {
    this.r.queryParamMap.subscribe(result => {this.data = result.get('s')
    console.log(this.data)
    this.prod = this.prod1.filter(c => c.pname.includes(this.data))
  });
  }
}
