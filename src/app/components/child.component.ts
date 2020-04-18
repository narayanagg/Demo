import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styles: []
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
@Input() public parent; 
@Input() public Emails;
}
