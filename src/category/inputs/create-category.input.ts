import { Field, ID, InputType } from '@nestjs/graphql';
import { TodoEntity } from 'src/todo/entities/todo.entity';
import { CreateTodoInput } from 'src/todo/inputs/create-todo.input';

@InputType()
export class CreateCategoryInput {
  @Field(() => ID)
  id: number;

  @Field()
  title: string;

  @Field((type) => [CreateTodoInput], { nullable: 'itemsAndList' })
  todos: CreateTodoInput[];
}

// type => [Post], { nullable: 'items' }
