import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService){}

    @Post('login')
    async login(): Promise<any>{
        const payload = {username: 'grafiticraft'}
        return this.authService.login(payload)
    }
}
