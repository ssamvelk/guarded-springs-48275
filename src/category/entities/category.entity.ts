import { Field, ID, ObjectType } from '@nestjs/graphql';
import { TodoEntity } from 'src/todo/entities/todo.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity('categories')
export class CategoryEntity {
  @Field(() => ID)
  @PrimaryColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field(() => [TodoEntity])
  @OneToMany((type) => TodoEntity, (todo) => todo.category)
  todos: TodoEntity[];
}
