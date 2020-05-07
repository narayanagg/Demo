import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ParentexpComponent } from '../parentexp/parentexp.component'
@Component({
  selector: 'app-childexp',
  templateUrl: './childexp.component.html',
  styleUrls: ['./childexp.component.css']
})
export class ChildexpComponent implements OnInit {
  // nam: string;
  // @Input() p_id;
  // @Input() p_name;
  // @Input() p_cost;
  // @Input() name1;
  // @Output() sendData: EventEmitter<any> = new EventEmitter;
  // public clickMe(): any {
  //   this.sendData.emit(this.p_id + "" + this.p_name + "" + this.p_cost);
  // }
  // public var_one: string;
  // public var_two: string;
  // constructor() {
  //   this.var_one ="hello";

  //   this.var_two ="world";
  // }

  public var_one:string;

  public var_two:string; 

  ngOnInit() {
    this.var_one="hello";
    this.var_two="world";
    // this.nam = obj.name;
  }

}
