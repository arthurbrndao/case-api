import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getInitialUsers(): string {
    return 'Hello World!';
  }
}
