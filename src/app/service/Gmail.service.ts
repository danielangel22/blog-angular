import { Injectable } from '@angular/core';
import { ISystemSettings } from './ISystemSettings';

@Injectable({
  providedIn: 'root',
})
export class GmailService {
  private _settings: ISystemSettings;

  constructor(settings: ISystemSettings) {
    this._settings = settings;
    // this._transporter = nodemailer.createTransport(
    //   `smtps://trabajos.daniel2018@gmail.com%40gmail.com:sjnhghpozedvllkm@smtp.gmail.com`
    // );
  }

  sendMail(to: string, subject: string, content: string) {
    let options = {
      from: to,
      to: this._settings.SmtpFromAddress,
      subject: subject,
      text: content,
    };

  }
}
