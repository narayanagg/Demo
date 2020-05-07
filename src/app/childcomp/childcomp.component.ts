import { Component, OnInit,Output, Input, SimpleChanges,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-childcomp',
  templateUrl: './childcomp.component.html',
  styleUrls: ['./childcomp.component.css']
})
export class ChildcompComponent implements OnInit {

  constructor() { }
  message:string;
  name:string="narayana";
  name1:string="Iam from child";
  
 @Input() loggedin:boolean;
  ngOnInit() {
   console.log("ngonit");
  }
  @Output() greetEvent=new EventEmitter();
  ngOnChanges(simple:SimpleChanges){
    debugger
    console.log(simple);
    console.log(this.loggedin);
    console.log(simple.loggedin.currentValue);
    if(this.loggedin){
      this.message="welcome back narayana";
    }
    else{
      this.message="pls login";
    }

   
  }
  callParentGreet(){
    this.greetEvent.emit(this.name1);
  }


}
