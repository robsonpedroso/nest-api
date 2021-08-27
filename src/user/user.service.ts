import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {
    
  }
  create(createUserDto: CreateUserDto): Promise<User> {
    const item = this.userRepository.create(createUserDto);
   return this.userRepository.save(item);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.userRepository.findOne(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const item = await this.userRepository.preload({
      id: id,
      ...updateUserDto,
    });
    if (!item) {
      throw new NotFoundException(`Usuário ${id} não encontrado`);
    }
    return this.userRepository.save(item);
  }
 
  async remove(id: string) {
    const item = await this.findOne(id);
    return this.userRepository.remove(item);
  }
}
