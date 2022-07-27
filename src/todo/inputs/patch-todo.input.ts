import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class PatchTodoDTO {
  @Field(() => ID)
  id: number;

  @Field()
  isCompleted?: boolean;
}
