import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from 'src/category/entities/category.entity';
import { Repository } from 'typeorm';
import {
  CreateCategoryInput,
  CreateCategoryInput2,
} from '../inputs/create-category.input';
import { UpdateCategoryInput } from '../inputs/update-category.input';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}

  async createCategoryInput(
    createCategoryInput: CreateCategoryInput,
  ): Promise<CategoryEntity> {
    return await this.categoryRepository.save({ ...createCategoryInput });
  }

  // категория с id
  async createCategoryInput2(
    createCategoryInput2: CreateCategoryInput2,
  ): Promise<CategoryEntity> {
    return await this.categoryRepository.save({ ...createCategoryInput2 });
  }

  async getOneCategory(id: number): Promise<CategoryEntity> {
    return await this.categoryRepository.findOne({
      where: { id },
      relations: { todos: true },
    });
  }

  async getAllCategory(): Promise<CategoryEntity[]> {
    return await this.categoryRepository.find({ relations: { todos: true } });
  }

  async deleteCategory(id: number): Promise<number> {
    await this.categoryRepository.delete({ id });
    return id;
  }

  async updateCategory(updateCategoryInput: UpdateCategoryInput) {
    await this.categoryRepository.update(
      { id: updateCategoryInput.id },
      { ...updateCategoryInput },
    );
    return this.getOneCategory(updateCategoryInput.id);
  }
}
