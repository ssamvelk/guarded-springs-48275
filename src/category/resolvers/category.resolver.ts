import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CategoryEntity } from '../entities/category.entity';
import {
  CreateCategoryInput,
  CreateCategoryInput2,
} from '../inputs/create-category.input';
import { UpdateCategoryInput } from '../inputs/update-category.input';
import { CategoryService } from '../services/category.service';

@Resolver('Category')
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query(() => [CategoryEntity])
  async categories() {
    return await this.getAllCategories();
  }

  @Query(() => [CategoryEntity])
  async getAllCategories(): Promise<CategoryEntity[]> {
    return await this.categoryService.getAllCategory();
  }

  @Query(() => CategoryEntity)
  async getOneCategories(@Args('id') id: number): Promise<CategoryEntity> {
    return await this.categoryService.getOneCategory(id);
  }

  @Mutation(() => CategoryEntity)
  async createCategory(
    @Args('createCategory') createCategoryInput: CreateCategoryInput,
  ): Promise<CategoryEntity> {
    return await this.categoryService.createCategoryInput(createCategoryInput);
  }

  @Mutation(() => CategoryEntity)
  async createCategory2(
    @Args('createCategory') createCategoryInput2: CreateCategoryInput2,
  ): Promise<CategoryEntity> {
    return await this.categoryService.createCategoryInput2(
      createCategoryInput2,
    );
  }

  @Mutation(() => CategoryEntity)
  async updateCategory(
    @Args('updateCategory') updateCategoryInput: UpdateCategoryInput,
  ): Promise<CategoryEntity> {
    return await this.categoryService.updateCategory(updateCategoryInput);
  }

  @Mutation(() => Number)
  async removeCategory(@Args('id') id: number): Promise<number> {
    return await this.categoryService.deleteCategory(id);
  }
}
