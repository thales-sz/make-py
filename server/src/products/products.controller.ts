import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Admin, Public } from 'src/common/metadata';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Admin()
  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    const product = await this.productsService.findOne({
      name: createProductDto.name,
    });

    if (product) throw new ConflictException(`This product already exists`);

    return this.productsService.create(createProductDto);
  }

  @Public()
  @Get()
  findAll() {
    console.log('Find all products');
    return this.productsService.findAll({});
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log('Find one', id);
    return this.productsService.findOne({ _id: id });
  }

  @Admin()
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @Admin()
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const product = await this.productsService.findOne({ _id: id });

    if (!product)
      throw new NotFoundException(`Product with id: '${id}' not found`);

    return this.productsService.remove(id);
  }
}
