import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TodoEntity } from '../entities/todo.entity';
import { CreateTodoInput } from '../inputs/create-todo.input';
import { UpdateTodoInput } from '../inputs/update-todo.input';
import { TodoService } from '../service/todo.service';

@Resolver('Todo')
export class TodoResolver {
  constructor(private todoService: TodoService) {}

  @Query(() => [TodoEntity])
  async getAllTodos() {
    return await this.todoService.getAllTodos();
  }

  @Query(() => TodoEntity)
  async getOneTodo(@Args('id') id: number) {
    return await this.todoService.getOneTodo(id);
  }

  @Mutation(() => TodoEntity)
  async createTodo(@Args('todo') todo: CreateTodoInput): Promise<TodoEntity> {
    return await this.todoService.createTodo(todo);
  }

  @Mutation(() => TodoEntity)
  async updateTodo(@Args('todo') todo: UpdateTodoInput): Promise<TodoEntity> {
    return await this.todoService.updateTodo(todo);
  }

  @Mutation(() => TodoEntity)
  async deleteTodo(@Args('id') id: number): Promise<number> {
    return await this.todoService.deleteTodo(id);
  }
}
