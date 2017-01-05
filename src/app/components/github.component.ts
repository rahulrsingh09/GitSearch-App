import { Component,OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'github',
  templateUrl : 'github.component.html',
})
export class GithubComponent implements OnInit {
    
    user:any;
    repos:any;
    username:string;

    constructor(private githubService:GithubService){

    }

    ngOnInit(){
    }

    search(){
      this.githubService.updateUsername(this.username);
      
      this.githubService.getUser().subscribe(user => {
        //console.log(user);
        this.user = user;
      });

      this.githubService.getRepos().subscribe(repos => {
        //console.log(user);
        this.repos = repos;
      });

    }
 }
