import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private poroductRepository: Repository<Product>
  ) {
    
  }
  create(createProductDto: CreateProductDto): Promise<Product> {
    const item = this.poroductRepository.create(createProductDto);
    return this.poroductRepository.save(item);
  }

  findAll(): Promise<Product[]> {
    return this.poroductRepository.find();
  }

  findOne(id: string): Promise<Product> {
    return this.poroductRepository.findOne(id);
  }

  async update(id: string, updateProductDto: UpdateProductDto): Promise<Product> {
    const item = await this.poroductRepository.preload({
      id: id,
      ...updateProductDto,
    });
    if (!item) {
      throw new NotFoundException(`Produto ${id} não encontrado`);
    }
    return this.poroductRepository.save(item);
  }

  async remove(id: string) {
    const item = await this.findOne(id);
    return this.poroductRepository.remove(item);
  }

  
}


