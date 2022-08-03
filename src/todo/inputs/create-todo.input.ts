import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateTodoInput {
  @Field()
  text: string;

  @Field({ defaultValue: false })
  isCompleted: boolean;

  @Field()
  categoryId: number;
}
