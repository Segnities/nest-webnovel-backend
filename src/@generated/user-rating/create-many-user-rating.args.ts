import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRatingCreateManyInput } from './user-rating-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyUserRatingArgs {

    @Field(() => [UserRatingCreateManyInput], {nullable:false})
    @Type(() => UserRatingCreateManyInput)
    data!: Array<UserRatingCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
