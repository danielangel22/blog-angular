import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private url: string = "https://www.googleapis.com/youtube/v3";
  private app_key: string = "AIzaSyCLLI2gqvFVCCozSpahYTR4wMQ-7onGAdI";
  private channel: string = "UCRDsrn3PX9eJdqH74Zo6eFA";
  constructor(private httpClient: HttpClient) { }

  public getVideos() {
    const parameters = new HttpParams().set('part', 'snippet').set('channelId', this.channel)
      .set('maxResults', 5).set('key', this.app_key);
    let urlLocal = `${this.url}/search`;
    return this.httpClient.get(urlLocal, { params: parameters }).pipe(map(resp => resp));
  }
}
