import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDto } from 'src/app/dto/LoginDto';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {
  hide = true;
  loginDto!:LoginDto
  userData:any;


  loginForm=new FormGroup({
    userName:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
  })

  get userName (){
    return this.loginForm.get("userName");
  }
  get password(){
   return this.loginForm.get("password");
  }

  constructor(private router: Router,
    private authService: AuthService
    ) {}

    get f() {
    return this.loginForm.controls;
  }


  ngOnInit() {
    this.loginDto={
      userName:'',
      password:''
    }
  }

  login(){
    this.loginDto.userName = this.userName?.value as string;
    this.loginDto.password = this.password?.value as string;
   
   this.authService.login(this.loginDto).subscribe(response=>{
    this.userData = response.data;
    if(this.userData.status == "200"){
      localStorage.setItem("token",this.userData.token);
      localStorage.setItem("tokenType",this.userData.tokenType);
      localStorage.setItem("userType",this.userData.userType);
      localStorage.setItem("userid",this.userData.userid);
    }else{
      alert("Incorrect UserName Or Password")
    }
     
      console.log(this.userData.userType)

      this.router.navigate(['/dashbaord']);
  }, error => {
   // this.alert("Warning", "Incorrect UserName Or Password", "warning", "");
  });
    
  }

  userNavigation(userType:any){
    if(userType === 'ADMIN'){
      this.router.navigate(['/dashbaord']);
    }else if(userType === 'DOCTOR'){
      this.router.navigate(['/dashbaord']);
    }else if(userType === 'PATIENT'){
      this.router.navigate(['/patient']);
    }else if(userType === 'TECHNICIAN'){
      this.router.navigate(['/dashbaord']);
    }
  }
}
