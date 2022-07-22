import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCategoryInput {
  @Field(() => ID)
  id: number;

  // @Field({nullable:true})
  @Field()
  title: string;
}
