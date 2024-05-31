import { Component, EventEmitter, Input, OnInit, Output, OnChanges, DoCheck , OnDestroy} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent  implements OnInit, OnChanges, DoCheck, OnDestroy{
  ngOnDestroy(): void {

    //write cleanup or database close logic here 
    console.log("Destroy method called ")
  }
  ngDoCheck(): void {
    console.log("Do check event is triggered")
  } 
  ngOnChanges(){
    console.log("changes")
  }
  ngOnInit(): void {
    console.log("Write initialization code in this function")
  }
  
  @Input()
childData:string='';
@Output()
myEvent:EventEmitter<string> = new EventEmitter<string>
sendMessage(){

  //u need to send message using events to child componenets 
this.myEvent.emit("Message from child");
}


}
