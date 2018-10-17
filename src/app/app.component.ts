// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Goals';
// }
import { Component } from '@angular/core';
import {Goal} from './goal'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  // goal = 'Watching Finding Nemo';
  // goals: string[];
  //
  // constructor(){
  // this.goals = ["Watching Finding Nemo", "Buy Cookies","Get new phone case"];
  // }
  // goals = [
  // new Goal(1,'Watching finding Nemo',""),
  // new Goal(2, 'Buy Cookies',""),
  // // new Goal(3, 'Get new Phone Case'),
  // new Goal(4, 'Get Dog Food',""),
  // new Goal(5, 'Solve math homework',""),
  // new Goal(6, 'Plot my world domination plan',""),
  // ]
}
