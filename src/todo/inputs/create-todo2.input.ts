import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateTodoInput2 {
  @Field()
  text: string;

  @Field({ defaultValue: false })
  isCompleted: boolean;

  @Field()
  categoryId: number;
}
