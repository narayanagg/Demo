import { Component, OnInit } from '@angular/core';
import { DotnetService } from '../services/dotnet.service';
import { Dotnet1Service } from '../services/dotnet1.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  public res1: any;
  public res2: any;

  constructor(private service1: DotnetService, private service2: Dotnet1Service) { }

  ngOnInit() {
    this.service1.Getdata().subscribe((PosRes) => {
      this.res1 = PosRes;
      this.service2.Getdata().subscribe((PosRes) => {
this.res2=PosRes;
      }, (errRes: HttpErrorResponse) => {
        console.log(errRes);
      });

    }, (errRes: HttpErrorResponse) => {
      console.log(errRes);
    });
  }

}
