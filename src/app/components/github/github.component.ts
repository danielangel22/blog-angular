import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/service/github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  repos: any;
  config: any;

  constructor(private gitHubService: GithubService) {
    console.log("loading ... repos");
    this.gitHubService.loadRepos().subscribe(res => {
      console.log(res);
      this.repos = res;
    });
  }

  ngOnInit(): void {

  }

}
