import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { flag, signUp } from '../data-type';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getUser()
  {
   return this.http.get<signUp>('http://localhost:3000/users');
  }
  getflag()
  {
    return this.http.get<flag[]>('http://localhost:3000/flags');
  }
}
