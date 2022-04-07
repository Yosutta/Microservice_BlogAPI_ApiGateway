import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {Transport} from '@nestjs/microservices'

@Module({    
    imports: [
        ClientsModule.register([
        {
            name: 'SERVICE_AUTH',
            transport: Transport.RMQ,
            options: {
              urls: ['amqp://localhost:5672'],
              queue: 'auth_queue',
            }
          },
        ])
    ],
    controllers: [AuthController],
    providers: [AuthService]
})

export class AuthModule {}
