import { Component } from '@angular/core';
import { logIn, signUp } from '../data-type';
import { ProductsService } from '../services/products.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  showLogin:boolean=false;
  showInvalid:String='';
  indication:String='';
  check:undefined|signUp;
   constructor(private user: UsersService,private product:ProductsService ) { }
   signUp(data: signUp) {
    this.product.getUser().subscribe((result)=>{
      if(result)
      {
        this.check=result;
        this.check.filter((ans:signUp)=>{
          if(ans.email===data.email)
          {
            this.indication='email already exists try with different email';
            console.log("&&&&&&&&&");
          }
          else{
            this.user.userSignUp(data);
            console.log('$$$$$$$$');
          }
        })
      }
    })
    setTimeout(() => {
      this.indication='';
     }, 3000);
   }
   
 
   Login(data:logIn){
     
      this.user.loginUser(data);
      this.user.inValid.subscribe((isError)=>{
       if(isError)
       {
         this.showInvalid='Invalid email or password';
       }
      })
   }
   toggleLogin()
   {
     this.showLogin=true;
   }
   togglesignUp()
   {
     this.showLogin=false;
   }
   
   ngOnInit(){
     this.user.reloadSeller();
   }
}
