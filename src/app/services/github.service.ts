import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService{
     private username = 'rahulrsingh09';
     private client_id = "ca1f1104614b5c2440b3";
     private client_secret = "96620cea135b2297d7bf95cbc246f56efa116c25";

     constructor(private http:Http){

     }

     getUser(){
         return this.http.get('https://api.github.com/users/'+this.username)
         .map(response => response.json());
     }

     getRepos(){
         return this.http.get('https://api.github.com/users/'+this.username+'/repos')
         .map(response => response.json());
     }

     updateUsername(username:string){
         this.username = username;
     }

}
