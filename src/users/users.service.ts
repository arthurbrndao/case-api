import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private UserRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    const user = this.UserRepository.create(createUserDto);
    return this.UserRepository.save(user);
  }

  findAll() {
    return this.UserRepository.find();
  }

  findOne(id: number) {
    return this.UserRepository.findOneBy({ id: +id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.UserRepository.update({ id: +id }, updateUserDto);
  }

  remove(id: number) {
    return this.UserRepository.delete({ id: +id });
  }
}
