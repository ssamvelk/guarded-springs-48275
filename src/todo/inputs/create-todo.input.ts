import { Field, InputType } from '@nestjs/graphql';
import { CreateCategoryInput } from 'src/category/inputs/create-category.input';

@InputType()
export class CreateTodoInput {
  @Field()
  text: string;

  @Field({ defaultValue: false })
  isCompleted: boolean;

  @Field(() => CreateCategoryInput)
  category: CreateCategoryInput;
}
