import { Component, OnInit } from '@angular/core';
import { MailServer } from "../service/MailServer.service"
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-mail',
  templateUrl: './new-mail.component.html',
  styleUrls: ['./new-mail.component.css']
})
export class NewMailComponent implements OnInit {

  mailForm: FormGroup;

  constructor(private fromBuilder: FormBuilder,
    private mailServer: MailServer,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.mailForm = this.fromBuilder.group({
      From: ['', Validators.required],
      To: ['', Validators.required],
      Object: ['', Validators.required],
      Content: ['', Validators.required],
    });
  }
  onSubmitForm() {
    const formValue = this.mailForm.value;
    this.mailServer.sendMessages({
      From: formValue.From,
      To: formValue.To,
      Objet: formValue.Object,
      Content: formValue.Content,
      Date: Date.now(),
      New: true,
    })
    this.router.navigate(['/mailbox']);
  }
}
