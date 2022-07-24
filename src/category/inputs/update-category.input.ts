import { Field, ID, InputType } from '@nestjs/graphql';
import { TodoEntity } from 'src/todo/entities/todo.entity';

@InputType()
export class UpdateCategoryInput {
  @Field(() => ID)
  id: number;

  @Field()
  title: string;

  // @Field((type) => [TodoEntity!]!)
  // todos: TodoEntity[];
}
