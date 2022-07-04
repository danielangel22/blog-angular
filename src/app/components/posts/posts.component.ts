import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/service/youtube.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  myVideos: any[] = [];
  videoId: string = "";

  constructor(private youtubeService: YoutubeService) {
    this.youtubeService.getVideos().subscribe((resp: any) => {
      console.log(resp);

      this.myVideos = resp.items;
    });
  }

  ngOnInit(): void {
  }

}
