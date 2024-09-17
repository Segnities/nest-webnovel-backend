import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRatingCreateInput } from './user-rating-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneUserRatingArgs {

    @Field(() => UserRatingCreateInput, {nullable:false})
    @Type(() => UserRatingCreateInput)
    data!: UserRatingCreateInput;
}
