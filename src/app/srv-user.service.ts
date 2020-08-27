import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SrvUserService {
 
 url = "https://jsonplaceholder.typicode.com/users"; 
 userregurl = "https://api.mlab.com/api/1/databases/empcurd/collections/datatable?apiKey=NwUz6Go9-PSOYsRJS9tLR-p5idELeFx1";
 constructor(private http:HttpClient) { }
  //  userdata$ = this.http.get(this.url)
   
    servdata(){
         return this.http.get(this.userregurl)
    }
    userreturn(payload){
      return this.http.post(this.userregurl,payload)
    }
}
