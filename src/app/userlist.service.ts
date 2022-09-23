import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class UserlistService {

  constructor(private http: HttpClient) { }
  usersApi = "https://jsonplaceholder.typicode.com/comments";
  getUsersList(){
    return this.http.get(this.usersApi)
  }


  

}
