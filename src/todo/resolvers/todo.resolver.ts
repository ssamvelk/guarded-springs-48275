import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TodoEntity } from '../entities/todo.entity';
import { CreateTodoInput } from '../inputs/create-todo.input';
import { CreateTodoInput2 } from '../inputs/create-todo2.input';
import { PatchTodoDTO } from '../inputs/patch-todo.input';
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
  async patchTodo(@Args('todo') todo: PatchTodoDTO): Promise<TodoEntity> {
    return await this.todoService.patchTodo(todo);
  }

  @Mutation(() => TodoEntity)
  async deleteTodo(@Args('id') id: number): Promise<number> {
    return await this.todoService.deleteTodo(id);
  }

  // ---------------------------------------------------------

  @Mutation(() => TodoEntity)
  async createTodo2(@Args('todo') todo: CreateTodoInput2): Promise<TodoEntity> {
    return await this.todoService.createTodo2(todo);
  }
}
