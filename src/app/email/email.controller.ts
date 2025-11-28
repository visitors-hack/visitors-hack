import { Controller, Post, Body } from '@nestjs/common';
import { EmailService } from './email.service';


@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send-cita')
  async sendCitaEmail(
    @Body() body: { email: string; qrBase64: string; citaInfo: any },
  ) {
    const { email, qrBase64, citaInfo } = body;

    await this.emailService.sendCitaEmail(email, 'Su cita', qrBase64, citaInfo);

    return { message: 'Email enviado correctamente' };
  }
}
