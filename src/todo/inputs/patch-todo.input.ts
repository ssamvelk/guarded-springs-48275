import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class PatchTodoDTO {
  @Field(() => ID)
  id: number;

  // @Field()
  // text?: string;

  @Field()
  isCompleted?: boolean;

  // @Field()
  // category?: number;
}
