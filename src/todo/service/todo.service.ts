import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodoEntity } from '../entities/todo.entity';
import { CreateTodoInput } from '../inputs/create-todo.input';
import { UpdateTodoInput } from '../inputs/update-todo.input';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoEntity)
    private readonly todoRepository: Repository<TodoEntity>,
  ) {}

  async getAllCategory(): Promise<TodoEntity[]> {
    return await this.todoRepository.find();
  }

  async getOneTodo(id: number): Promise<TodoEntity> {
    return await this.todoRepository.findOneBy({ id });
  }

  async createTodo(todo: CreateTodoInput): Promise<TodoEntity> {
    return await this.todoRepository.save({ ...todo });
  }

  async updateCategory(todo: UpdateTodoInput): Promise<TodoEntity> {
    await this.todoRepository.update({ id: todo.id }, { ...todo });
    return this.getOneTodo(todo.id);
  }

  async deleteTodo(id: number): Promise<number> {
    await this.todoRepository.delete({ id });
    return id;
  }
}
