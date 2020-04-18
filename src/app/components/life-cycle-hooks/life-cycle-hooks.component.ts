import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.css']
})
export class LifeCycleHooksComponent implements OnInit {

  constructor() {console.log("Iam constructor"); }

  ngOnInit() {
    console.log("Iam ngOnInit");
  }
  ngOnChanges(){
    console.log("Iam ngOnchanges");
  }
 
  private num:number=100;
  public Name="Narayana";
  public Email="narayana000.reddy@gmail.com";
    ngDoCheck(){
       //when ever change detected in component properties, automatically this life cycle hook will execute.
       //after ngOnInit() automatically ngDoCheck() life cycle hook will execute
       console.log("in ngDoCheck"); 
    };

    public increment():number{
        return this.num=this.num+10;
    };
    public decrement():number{
        return this.num-=10;
    }

    ngAfterContentInit(){
      console.log("in ngAfterContentInit");
      //when ever framework identifies the memory for component, automatically this life cycle hook will execute
  };
  ngAfterContentChecked(){
      console.log("in ngAfterContentChecked");
      //when ever memory reserved for component, automatically this life cycle hook will execute
  };
  ngAfterViewInit(){
      console.log("in ngAfterViewInit");
      //when ever component loaded successfully, automatically this life cycle hook will execute
  };   
  ngAfterViewChecked(){
    console.log("in ngAfterViewChecked");
    //when ever data populated successfully, automatically this life cycle hook will execute
  };
  ngOnDestroy(){
    console.log("in ngOnDestroy");
    //before killing the component by framework automatically this life cycle hook will execute
  };



}
