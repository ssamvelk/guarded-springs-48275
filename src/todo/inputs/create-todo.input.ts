import { Field, ID, InputType } from '@nestjs/graphql';
import { CategoryEntity } from 'src/category/entities/category.entity';
import { CreateCategoryInput } from 'src/category/inputs/create-category.input';

@InputType()
export class CreateTodoInput {
  // @Field(() => ID)
  // id: number;

  @Field()
  text: string;

  @Field({ defaultValue: false })
  isCompleted: boolean;

  // @Field({ defaultValue: 1 })
  // category: number;

  @Field(() => CreateCategoryInput)
  category: CreateCategoryInput;
}
