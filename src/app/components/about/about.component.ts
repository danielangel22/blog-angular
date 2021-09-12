import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GmailService } from 'src/app/service/Gmail.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor() {
    console.log('Se llama el about component');
  }

  ngOnInit(): void {}

  contact(contactForm: NgForm) {
    let gmailService = new GmailService({
      SmtpServerConnectionString : 'smtp://localhost:1025',
      SmtpFromAddress : 'alexandermo1233@gmail.com'
    });

    // gmailService.sendMail(
    //   "test2@test.com",
    //   "subject",
    //   "content").then( (msg) => {
    //     console.log(`sendMail result :(${msg})`);
    // } );
  }
}
