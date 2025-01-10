export type UserTypes = 'Proprietário' | 'Fornecedor' | 'Operador' | 'Hóspede';

export interface IInitialUsersResponse {
  status: number;
  body: string;
}

export interface IInitialUser {
  name: string;
  phone: string;
  email: string;
  createdAt: string;
}
