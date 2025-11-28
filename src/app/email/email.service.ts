import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as fs from 'fs';
import * as path from 'path';
import * as handlebars from 'handlebars';

@Injectable()
export class EmailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail', // usar Gmail directamente  
      auth: {
        user: 'francisco.olmos.ubp@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });
  }

  async sendCitaEmail(to: string, subject: string, qrBase64: string, citaInfo: any) {
    // Leer template HTML
    const templatePath = path.join(process.cwd(), 'src', 'app', 'email', 'templates', 'cita-template.html');
    const templateSource = fs.readFileSync(templatePath, 'utf-8');
    const template = handlebars.compile(templateSource);

    // Generar HTML con datos de la cita
    const html = template({
      ...citaInfo,
      qrBase64,
      fecha: new Date(citaInfo.fecha).toLocaleDateString(),
    });

    const mailOptions = {
      from: 'francisco.olmos.ubp@gmail.com',
      to,
      subject,
      html,
      attachments: [
      {
        filename: 'qr.png',
        content: qrBase64.split('base64,')[1], // extraer solo el contenido base64
        encoding: 'base64',
        cid: 'qr_cita', // el mismo que pusiste en el template
      },
    ],
    };

    await this.transporter.sendMail(mailOptions);
  }
}