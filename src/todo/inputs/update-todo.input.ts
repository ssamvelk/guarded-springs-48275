import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateTodoInput {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  text?: string;

  @Field({ nullable: true })
  isCompleted?: boolean;
}
