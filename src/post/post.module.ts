import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { ClientsModule, Transport } from '@nestjs/microservices'

@Module({
    imports : [
        ClientsModule.register([
        {
            name: 'SERVICE_POST',
            transport: Transport.TCP,
            options:{
                host: '127.0.0.1',
                port: 8002
            }
        }
    ])
    ],
    controllers: [PostController],
    providers: [PostService],
})
export class PostModule {}
