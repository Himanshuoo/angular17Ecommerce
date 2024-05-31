import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  
childmsg:string ='';
  myData:string = "Good Morning students...."

readfromchild(data:any){
  this.childmsg = data;
}




  

}
