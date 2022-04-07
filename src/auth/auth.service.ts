import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AuthService {
    constructor(@Inject('SERVICE_AUTH') private readonly clientServiceAuth: ClientProxy){}

    login(loginUserDto){
        const pattern = {type:'auth', action: 'login'}
        const payload = loginUserDto
        return this.clientServiceAuth.send<string>(pattern, payload)
    }    
}
