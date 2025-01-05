import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

interface IInitialUsers {
  status: number;
  body: string;
}

@Injectable()
export class AppService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async getInitialUsers(): Promise<object> {
    try {
      const apiUrl = this.configService.get<string>('INITIAL_DATA_API_URL');

      const { data } = await firstValueFrom(
        this.httpService.get<IInitialUsers>(apiUrl),
      );

      return JSON.parse(data.body);
    } catch (error) {
      console.log(error);
      return {};
    }
  }
}
