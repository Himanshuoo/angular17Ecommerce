import { Component } from '@angular/core';

@Component({
  selector: 'app-angfeatures',
  templateUrl: './angfeatures.component.html',
  styleUrl: './angfeatures.component.css'
})
export class AngfeaturesComponent {
show() {
this.b = !this.b
}
b: boolean=false;
type: number =2;
countries:string[]= ["India", "UK", "USA", "Australia", "France"]


}
