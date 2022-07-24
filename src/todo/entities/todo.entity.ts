import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { CategoryEntity } from 'src/category/entities/category.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity('todo')
export class TodoEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Field()
  text: string;

  @Column()
  @Field()
  isCompleted: boolean;

  // @JoinColumn()
  @ManyToOne(() => CategoryEntity, (category) => category.todos, {
    cascade: true,
  })
  @Field(() => CategoryEntity)
  category: CategoryEntity;
}
