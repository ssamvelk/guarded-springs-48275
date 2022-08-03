import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from 'src/category/entities/category.entity';
import { Repository } from 'typeorm';
import { CreateCategoryInput } from '../inputs/create-category.input';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}

  async getAllCategory(): Promise<CategoryEntity[]> {
    return await this.categoryRepository.find({ relations: { todos: true } });
  }

  async getOneCategory(id: number): Promise<CategoryEntity> {
    return await this.categoryRepository.findOne({
      where: { id },
      relations: { todos: true },
    });
  }

  async createCategory(
    createCategoryInput: CreateCategoryInput,
  ): Promise<CategoryEntity> {
    return await this.categoryRepository.save({ ...createCategoryInput });
  }

  async deleteCategory(id: number): Promise<number> {
    await this.categoryRepository.delete({ id });
    return id;
  }
}
