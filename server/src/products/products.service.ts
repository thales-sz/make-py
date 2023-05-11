import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import ProductsRepository from './products.repository';
import { Product } from './schema/product.schema';
import { FilterQuery } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepository) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    return await this.productsRepository.create(createProductDto);
  }

  async findAll(filterQuery: FilterQuery<Product>): Promise<Product[]> {
    return this.productsRepository.findAll(filterQuery);
  }

  async findOne(filterQuery: FilterQuery<Product>): Promise<Product | null> {
    return this.productsRepository.findOne(filterQuery);
  }

  async update(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product | null> {
    return this.productsRepository.findOneAndUpdate(
      { _id: id },
      updateProductDto,
    );
  }

  async remove(id: string): Promise<void> {
    await this.productsRepository.delete({ _id: id });
  }
}
