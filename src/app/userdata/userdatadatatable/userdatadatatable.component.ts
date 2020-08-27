import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { SrvUserService } from 'src/app/srv-user.service';
import { userdata } from 'src/app/userdata';
import { FormGroup, NgForm, FormArray, FormBuilder,Validators } from '@angular/forms'

@Component({
  selector: 'app-userdatadatatable',
  templateUrl: './userdatadatatable.component.html',
  styleUrls: ['./userdatadatatable.component.css']
})
export class UserdatadatatableComponent implements OnInit {
  userlist: object;
  ELEMENT_DATA: userdata[];
  displayedColumns = ['username', 'email', 'phoneno'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  productForm: FormGroup;

  disuser;
  userRegForm: FormGroup;
  res;

  constructor(private srv: SrvUserService,private fb:FormBuilder) { 
    this.productForm = this.fb.group({
      // name: '',
      quantities: this.fb.array([]) ,
    });
  }
  public userdis() {
    this.srv.servdata().subscribe(report => {
      this.dataSource.data = report as userdata[];  
        
    })
   
  }
 
  // quantities() : FormArray {
  //   return this.productForm.get("quantities") as FormArray
  // }
  // newQuantity(): FormGroup {
  //   return this.fb.group({
  //     username:'',
  //     email: '',
  //     phoneno: '',
  //   })
  // }

  // addQuantity() {
  //   this.quantities().push(this.newQuantity());
  // }
  // removeQuantity(i:number) {
  //   this.quantities().removeAt(i);
  // }
 


  ngOnInit() {
    this.formd()
    this.userdis()
}
formd(){
this.userRegForm = this.fb.group({
  // username: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
  username: [null, [Validators.required]],
   email: [null, Validators.required],
   phoneno:[null,Validators.required]
 });
}
sssubmit(f:NgForm){
  this.srv.userreturn(this.userRegForm.value).subscribe(result=>{
              console.log(result)
  })
 
  this.userdis()
  f.reset()
}
 
  onSubmit(f:NgForm) {
    console.log(this.productForm.value);
    this.srv.userreturn(this.productForm.value).subscribe(result=>{
    })
    }
  
}

