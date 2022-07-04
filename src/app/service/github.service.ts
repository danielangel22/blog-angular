import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private readonly url = 'https://api.github.com/users/Danielangel22/repos';
  private readonly urlContent = 'https://raw.githubusercontent.com/wiki/Danielangel22';
  private readonly urlRepoProfile = 'https://api.github.com/repos/Danielangel22/blog-angular';

  constructor(private httpClient: HttpClient) {
  }

  loadRepos = () => {
   return this.httpClient.get(`${this.url}?per_page=20`)
      .pipe(map(resp => resp));
  };

  getImage = (text: string) => {
    try {
      return text.match(/!\[[^\]]*\]\((?<filename>.*?)(?=\"|\))(?<optionalpart>\".*\")?\)/);
    } catch (e) {
      return null;
    }
  };

  getRepo = () => {
    try {
      return this.httpClient.get(this.urlRepoProfile)
    } catch (e) {
      return null;
    }
  };

  buildHome = (repo: string) => {
    let urlContent = this.urlContent;
    // console.log(this.getImage(repo))
    return urlContent += `${repo}/Home.md`;
  };

}
