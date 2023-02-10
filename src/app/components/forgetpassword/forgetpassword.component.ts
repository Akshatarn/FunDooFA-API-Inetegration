import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {
  [x: string]: any;
  forgetForm!: FormGroup;
  submitted = false;
constructor(
  private formBuilder: FormBuilder , private user: UserService ,public router:Router
  ){}

   ngOnInit() {
   this.forgetForm=this.formBuilder.group({
    email : ['', Validators.required],

   })
   }
   get f() { return this.forgetForm.controls; }

   onSubmit() {
    this.submitted = true;

    if (this.forgetForm.valid) {
      let data = { 
        email: this.forgetForm.value.email,
      }
      this.user.reset(data).subscribe((response: any) => {
        console.log(response)
      })
  }
  }
  // navAdmin()
  // {
  //   this.router.navigate(['/navAdmin']);
  // }
}

