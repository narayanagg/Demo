import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpParams ,HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-reactivefroms',
  templateUrl: './reactivefroms.component.html',
  styles: []
})
export class ReactivefromsComponent implements OnInit {
  list:any;

  Employee: FormGroup;
  constructor(private fb:FormBuilder) {
  }

  ngOnInit() {
    this.Employee = this.fb.group({
      fname:['',Validators.required],
      lname:['',Validators.minLength],
      email:['',Validators.required],
      photo:['',Validators.required]
    })
    this.Employee.patchValue({
      fname:'narayana'
    })
  }
  fileupload(event){
  let data=this.Employee.value;

data.photo=event.target.files[0]
  }
  Register() {
   
    if (this.Employee.invalid) {
      console.log("form fail to submit");
    }
    else {
      console.log(this.Employee);
      var data={'abc':this.Employee.controls['lname'].value,'def':this.Employee.controls['fname'].value}
      console.log(data);
      let data1=this.Employee.value;
     // console.log("hii"+this.Employee.controls['lnames'].value);
      debugger
      data1.IsActive= data1.IsActive== true ? 1:0;
      debugger
      console.log(data1);
      console.log(JSON.stringify(this.Employee.value) );
      console.log(this.Employee.controls['lname'].value);
      const body = new HttpParams()
        .set('name', data1.lname)
        .set('name1', data1.fname)

        console.log(body.toString());
    }

  }
  Onchange(event){
console.log(event.target.value);
  }
  Onchenge(event){
console.log(event);
  }
  onc(ev){
console.log(ev.target.value);
  }
}
