import { Optional } from '@nestjs/common';
import { Field, ID, InputType } from '@nestjs/graphql';
import { CategoryEntity } from 'src/category/entities/category.entity';
import { CreateCategoryInput } from 'src/category/inputs/create-category.input';
import { UpdateCategoryInput } from 'src/category/inputs/update-category.input';

@InputType()
export class CreateTodoInput2 {
  // @Field(() => ID)
  // id: number;

  @Field()
  text: string;

  @Field({ defaultValue: false })
  isCompleted: boolean;

  @Field()
  categoryId: number;

  // @Field(() => CategoryEntity)
  // category: CategoryEntity;

  // @Field({ defaultValue: 1 })
  // category: number;
}
