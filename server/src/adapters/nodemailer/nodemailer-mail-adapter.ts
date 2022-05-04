import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "3a8468924ca084",
      pass: "e50fd791b2cd10"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
            await   transport.sendMail({
            from: 'Equipe Feedback <oi@feedback.com>',
            to: 'Oliver Santos <oliverdraftspr@gmail.com>',
            subject,
            html: body,

        });
    }
}