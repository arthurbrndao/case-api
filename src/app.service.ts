import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { IInitialUser, IInitialUsersResponse } from './types';

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
        this.httpService.get<IInitialUsersResponse>(apiUrl),
      );

      const initialUsers = JSON.parse(data.body);
      const parsedInitialUsers: IInitialUser[] = initialUsers.clientes.map(
        (initialUser) => ({
          name: initialUser['Nome'],
          phone: initialUser['Telefone'],
          email: initialUser['E-mail'],
          type: initialUser['Tipo'],
          createdAt: initialUser['Data de Cadastro'],
        }),
      );

      return parsedInitialUsers;
    } catch (error) {
      console.log(error);
      return {};
    }
  }
}
