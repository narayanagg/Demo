import { Component, OnInit, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { ChildexpComponent } from '../childexp/childexp.component';

@Component({
  selector: 'app-parentexp',
  templateUrl: './parentexp.component.html',
  styleUrls: ['./parentexp.component.css']
})
export class ParentexpComponent implements OnInit {

  @ViewChildren(ChildexpComponent)
  private _child: QueryList<ChildexpComponent> = new QueryList();
  private my_array: Array<any> = [];
  names: string;
  ngAfterViewInit() {
    this.my_array = this._child.toArray();
  };
  public clickMe(): any {
    for (var i: number = 0; i < this.my_array.length; i++) {

      this.my_array[i].var_one = "angular";
      this.my_array[i].var_two = "framework";
    }
  }
  // clickMe(){
  //   this._child.var_one="angular";
  //   this._child.var_two="framework";
  //   }

  constructor() { }

  ngOnInit() {
  }

  name: string = "narayana reddy";
  private my_array1: Array<any> = [
    { p_id: 111, p_name: "p_one", p_cost: 10000 },
    { p_id: 222, p_name: "p_two", p_cost: 20000 },
    { p_id: 333, p_name: "p_three", p_cost: 30000 },
    { p_id: 444, p_name: "p_four", p_cost: 40000 },
    { p_id: 555, p_name: "p_five", p_cost: 50000 },
  ];

  my_fun(event) {
    alert(event);
  }
  onchange(event) {
    console.log(event);
    if (event == 'narayana') {
      alert("hello narayana");
    }
  }
  Onkeypress(event) {
    console.log(event.target.value);
    if (event.keyCode == 32) {
      this.names = "";
      alert("identified");

    }
  }
  fileupload(event) {
    console.log(event.target.files[0].name + event.target.files[0].type);
  }
}
