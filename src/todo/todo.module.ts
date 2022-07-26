import { Module } from '@nestjs/common';
import { TodoService } from './service/todo.service';
import { TodoResolver } from './resolvers/todo.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from './entities/todo.entity';
import { CategoryModule } from 'src/category/category.module';

@Module({
  imports: [TypeOrmModule.forFeature([TodoEntity]), CategoryModule],
  providers: [TodoService, TodoResolver],
})
export class TodoModule {}
