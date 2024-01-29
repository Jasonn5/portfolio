import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-lets-talk',
  templateUrl: './lets-talk.component.html',
  styleUrls: ['./lets-talk.component.scss']
})
export class LetsTalkComponent implements OnInit {
  public emailForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private emailService: EmailService
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.emailForm = this.formBuilder.group({
      subject: ["", [Validators.required]],
      email_from: ["", [Validators.required, Validators.email]],
      message: ["", [Validators.required]]
    });
  }

  sendEmail() {
    var message = this.emailForm.value;

    this.emailService.sendEmail(message.subject, message.email_from, message.message).then(()=>{
      console.log("sii");
    });
  }

  get subject() {
    return this.emailForm.get("subject");
  }

  
  get email_from() {
    return this.emailForm.get("email_from");
  }

  get message() {
    return this.emailForm.get("message");
  }
}
