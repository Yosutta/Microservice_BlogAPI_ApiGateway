import { Controller, Get } from '@nestjs/common';
import { zip } from 'rxjs';
import { AppService } from './app.service';
import { map } from 'rxjs/operators';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('ping-a')
  pingServiceA() {
    return this.appService.pingServiceA();
  }

  @Get('lmao')
  lmao() {
    return this.appService.lmao();
  }

  @Get('ping-all')
  pingAll() {
    console.log('pinging all');
    return zip(this.appService.pingServiceA(), this.appService.lmao()).pipe(
      map(([pongServiceA, resultServiceB]) => ({
        pongServiceA,
        resultServiceB,
      })),
    );
  }
}
