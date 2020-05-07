import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.css']
})
export class InteractionComponent implements OnInit, AfterViewInit {

  constructor() { }
  num: any;
  abc = 0;
  username: any;
  private _customername: any;
  @ViewChild('nameRef', { static: false }) nameElementRef: ElementRef;

  ngAfterViewInit() {
    this.nameElementRef.nativeElement.focus();
  }
  ngOnInit() {
  }
  pageTitle = "Angular component interaction";
  imgUrl = "https://picsum.photos/200";
  count() {

    this.abc = this.abc + 1;
  }
  get customername(): string {

    return this._customername;
  }
  set customername(value: string) {

    this._customername = value;
    if (value == 'narayana') {
      alert("hello narayanas");
    }
  }

  onchange(event) {
    this.username = event;
    if (event == 'narayana') {
      alert("hello narayana");
    }
  }



}
