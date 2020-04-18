import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DotnetService {

  constructor(private http: HttpClient) { }
  public Getdata():Observable<any> {
    return this.http.get("http://localhost:55493/Angularjs/index");
  }
}
