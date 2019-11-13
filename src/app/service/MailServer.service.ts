import { Subject } from "rxjs";

export class MailServer {
	mails = [
		{
			From: "Jim",
			To: "AML@AML.fr",
			Objet: "RE: New feature",
			Content: "BLA BLA BLA BLA BLA BLA",
			Date: Date.UTC(2018, 0, 1, 12, 15, 46),
			New: true,
		},
		{
			From: "Jim2",
			To: "AML@AML.fr",
			Objet: "RE 2: New feature",
			Content: "BLA BLA BLA BLA BLA BLA",
			Date: Date.UTC(2018, 0, 1, 13, 15, 46),
			New: true,
		},
	]
	mailsSubject = new Subject;

	pullMessages() {
		console.log(this.mails);
		this.mailsSubject.next(this.mails.slice());
		return this.mails;
	}

	sendMessages(mail: {From: string, To: string, Objet: string, Content: string, Date: number, New: boolean}) {
		this.mails.push(mail);
		this.pullMessages();
	}
}
