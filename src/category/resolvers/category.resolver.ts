import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CategoryEntity } from '../entities/category.entity';
import { CreateCategoryInput } from '../inputs/create-category.input';
import { CategoryService } from '../services/category.service';

@Resolver('Category')
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query(() => [CategoryEntity])
  async categories(): Promise<CategoryEntity[]> {
    return await this.categoryService.getAllCategory();
  }

  @Mutation(() => CategoryEntity)
  async createCategory(
    @Args('createCategory') createCategoryInput: CreateCategoryInput,
  ): Promise<CategoryEntity> {
    return await this.categoryService.createCategory(createCategoryInput);
  }

  @Mutation(() => Number)
  async removeCategory(@Args('id') id: number): Promise<number> {
    return await this.categoryService.deleteCategory(id);
  }
}
