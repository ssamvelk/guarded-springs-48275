import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from './entities/category.entity';
import { CategoryService } from './services/category.service';
import { CategoryResolver } from './resolvers/category.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity])],
  providers: [CategoryService, CategoryResolver],
})
export class CategoryModule {}
