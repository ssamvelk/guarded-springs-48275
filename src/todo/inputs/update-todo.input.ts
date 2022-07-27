import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateTodoInput {
  @Field(() => ID)
  id: number;

  @Field()
  text: string;

  @Field()
  isCompleted: boolean;
}
