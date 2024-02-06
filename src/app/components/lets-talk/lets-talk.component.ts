import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { ToastrService } from 'ngx-toastr';
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
    private emailService: EmailService,
    private recaptchaV3Service: ReCaptchaV3Service,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.emailForm = this.formBuilder.group({
      subject: ["", [Validators.required]],
      email_from: ["", [Validators.required, Validators.email]],
      message: ["", [Validators.required]],
    });
  }

  sendEmail() {
    this.recaptchaV3Service.execute('importantAction').subscribe((token: string) => {
      console.log(token)
      if (this.emailForm.valid) {
        var message = this.emailForm.value;
        this.emailService.sendEmail(message.subject, message.email_from, message.message).then(() => {
          this.toastr.success('Email sent successfully', 'Success');
          this.emailForm.reset();
        });
      }
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

