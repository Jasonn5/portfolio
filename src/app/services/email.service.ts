import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment ';
import emailjs from '@emailjs/browser'

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private sendgridClient: any;

  constructor() {
    emailjs.init('bqjVQm5_E0Bc6Xw9C')
  }

  async sendEmail(subject: string,email_from: string, message: string) {
    let response = await emailjs.send("service_dkywrqa","template_ycliimm",{
      from_name: email_from,
      to_name: "Jeyson Valdivia",
      subject: subject,
      message: message,
      });
  }
}
