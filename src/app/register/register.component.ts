import { Component } from '@angular/core';
import { OnlineserviceService } from '../onlineservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers :[OnlineserviceService]
})
export class RegisterComponent {

  constructor(public ob:OnlineserviceService){}
  validate(frm:any)
  {
   this.ob.Addnewuser(frm).subscribe(result => alert(result.message))
    
  }
}
