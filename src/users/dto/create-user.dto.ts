import { UserTypes } from 'src/types';

export class CreateUserDto {
  name: string;
  phone: string;
  email: string;
  type: UserTypes;
}
