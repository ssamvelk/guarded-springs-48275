import { Field, InputType } from '@nestjs/graphql';
import { CreateTodoInput } from 'src/todo/inputs/create-todo.input';

@InputType()
export class CreateCategoryInput {
  @Field()
  title: string;

  @Field((type) => [CreateTodoInput], { nullable: 'itemsAndList' })
  todos: CreateTodoInput[];
}
