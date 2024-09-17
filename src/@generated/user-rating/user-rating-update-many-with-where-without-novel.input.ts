import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRatingScalarWhereInput } from './user-rating-scalar-where.input';
import { Type } from 'class-transformer';
import { UserRatingUpdateManyMutationInput } from './user-rating-update-many-mutation.input';

@InputType()
export class UserRatingUpdateManyWithWhereWithoutNovelInput {

    @Field(() => UserRatingScalarWhereInput, {nullable:false})
    @Type(() => UserRatingScalarWhereInput)
    where!: UserRatingScalarWhereInput;

    @Field(() => UserRatingUpdateManyMutationInput, {nullable:false})
    @Type(() => UserRatingUpdateManyMutationInput)
    data!: UserRatingUpdateManyMutationInput;
}
