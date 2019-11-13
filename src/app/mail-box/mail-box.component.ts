import { Component, OnInit } from '@angular/core';
import { MailServer } from "../service/MailServer.service"
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.css']
})
export class MailBoxComponent implements OnInit {

  mailSubscription: Subscription;
  mails = []

  constructor(private mailServer: MailServer, ) { }

  ngOnInit() {
    this.mailSubscription = this.mailServer.mailsSubject.subscribe(
      (mails:[]) => {
        this.mails = mails;
      }
    );
    this.mailServer.pullMessages();
  }

  test() {
    const mails = this.mailServer.pullMessages();
    console.log(mails);
    return mails;
  }


}
