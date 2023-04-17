import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { logIn, signUp } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  inValid=new EventEmitter<boolean>(false);
  userService:boolean=false;
   constructor(private http:HttpClient,private router:Router) { }
   userSignUp(data:signUp){
      this.http.post('http://localhost:3000/users',data).subscribe(result=>{
       if(result)
       {
         localStorage.setItem("user",JSON.stringify(result));
         this.router.navigate(['firstPage']);
       }
     })
   }
  
   reloadSeller()
   {
     if(localStorage.getItem('user'))
     {
       this.userService=true;
       this.router.navigate(['firstPage']);
     }
   }
   loginUser(data:logIn){
     this.http.get(`http://localhost:3000/users?email=${data.email}&password=${data.password}`,
    {observe:'response'}).subscribe((result:any)=>{
     if(result && result.body && result.body.length===1)
     {
       this.inValid.emit(false);
       localStorage.setItem("user",JSON.stringify(result));
       this.router.navigate(['firstPage']);
     }
     else{
       this.inValid.emit(true);
     }
     })
   }
}
