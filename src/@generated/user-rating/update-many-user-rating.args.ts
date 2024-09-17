import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRatingUpdateManyMutationInput } from './user-rating-update-many-mutation.input';
import { Type } from 'class-transformer';
import { UserRatingWhereInput } from './user-rating-where.input';

@ArgsType()
export class UpdateManyUserRatingArgs {

    @Field(() => UserRatingUpdateManyMutationInput, {nullable:false})
    @Type(() => UserRatingUpdateManyMutationInput)
    data!: UserRatingUpdateManyMutationInput;

    @Field(() => UserRatingWhereInput, {nullable:true})
    @Type(() => UserRatingWhereInput)
    where?: UserRatingWhereInput;
}
