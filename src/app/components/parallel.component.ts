import { Component, OnInit } from '@angular/core';
import { DotnetService } from '../services/dotnet.service';
import { Dotnet1Service } from '../services/dotnet1.service';
import { Observable } from 'rxjs-compat';
import { HttpErrorResponse } from '@angular/common/http';
import { combineLatest } from 'rxjs';


@Component({
  selector: 'app-parallel',
  templateUrl: './parallel.component.html',
  styleUrls: ['./parallel.component.css']
})
export class ParallelComponent implements OnInit {
  res1: any;
  res2: any;
  res3: any;
  res4: any;

  constructor(private service1: DotnetService, private service2: Dotnet1Service) { }

  ngOnInit() {
    Observable.forkJoin([this.service1.Getdata(), this.service2.Getdata()]).subscribe((PosRes) => {
      this.res1 = PosRes[0];
      this.res2 = PosRes[1];
    }, (errRes: HttpErrorResponse) => {
      console.log(errRes);
    });


    let combined = combineLatest(this.service1.Getdata(), this.service2.Getdata()).subscribe(([res1, res2]) => {
      this.res3 = res1;
      this.res4 = res2;
    });
  }

}
