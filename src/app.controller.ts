import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto';
import { CreateNotificationBody } from './create-notification-body';

@Controller('joprel')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    
    const { recipientId, content, category } = body;
    console.log(recipientId, content, category);


    /* await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content: 'Você tem uma nova solicitação de amizade!',
        category: 'social',
        recipientId: randomUUID(),
      },
    }); */
  }
}
