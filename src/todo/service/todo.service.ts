import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryService } from 'src/category/services/category.service';
import { Repository } from 'typeorm';
import { TodoEntity } from '../entities/todo.entity';
import { CreateTodoInput } from '../inputs/create-todo.input';
import { CreateTodoInput2 } from '../inputs/create-todo2.input';
import { PatchTodoDTO } from '../inputs/patch-todo.input';
import { UpdateTodoInput } from '../inputs/update-todo.input';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoEntity)
    private readonly todoRepository: Repository<TodoEntity>,
    private categoryService: CategoryService,
  ) {}

  async getAllTodos(): Promise<TodoEntity[]> {
    return await this.todoRepository.find({ relations: { category: true } });
  }

  async getOneTodo(id: number): Promise<TodoEntity> {
    return await this.todoRepository.findOne({
      where: { id },
      relations: { category: true },
    });
  }

  async createTodo(todo: CreateTodoInput): Promise<TodoEntity> {
    return await this.todoRepository.save({ ...todo });
  }

  async updateTodo(todo: UpdateTodoInput): Promise<TodoEntity> {
    await this.todoRepository.update({ id: todo.id }, { ...todo });
    return await this.getOneTodo(todo.id);
  }

  async patchTodo(todo: PatchTodoDTO): Promise<TodoEntity> {
    const oldTodo = await this.getOneTodo(todo.id);
    await this.todoRepository.update({ id: todo.id }, { ...oldTodo, ...todo });
    return await this.getOneTodo(todo.id);
  }

  async deleteTodo(id: number): Promise<number> {
    await this.todoRepository.delete({ id });
    return id;
  }

  async createTodo2(todo: CreateTodoInput2): Promise<TodoEntity> {
    const { text, isCompleted, categoryId } = todo;
    const category = await this.categoryService.getOneCategory(categoryId);
    if (!category) {
      console.log('нет такой категории');
      return;
    }
    return await this.todoRepository.save({ text, isCompleted, category }); // DeepPartial<TodoEntity> ?
  }
}
