import { Module } from '@nestjs/common';
import { TodoService } from './service/todo.service';
import { TodoResolver } from './resolvers/todo.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from './entities/todo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TodoEntity])],
  providers: [TodoService, TodoResolver],
})
export class TodoModule {}
