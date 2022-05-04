import express from 'express';
import { prisma } from './prisma';
import nodemailer from 'nodemailer';

const app = express();

app.use(express.json());

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "3a8468924ca084",
      pass: "e50fd791b2cd10"
    }
});

app.post('/feedbacks', async (req, res) => {
//    console.log(req.body);
const { type, comment, screenshot } = req.body;
 
const feedback = await prisma.feedback.create({
        data: {
            type,
            comment,
            screenshot,
        }
    });

await   transport.sendMail({
        from: 'Equipe Feedback <oi@feedback.com>',
        to: 'Oliver Santos <oliverdraftspr@gmail.com>',
        subject: 'Novo Feedback',
        html: [
            `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
            `<p>Tipo do feedback: ${type}</p>`,
            `<p>Comentário: ${comment}</p>`,
            `</div>`
        ].join('\n')

    });

    return res.status(201).json({data: feedback});
})

app.listen(3333, () => {
    console.log('HTTP server running!');
});