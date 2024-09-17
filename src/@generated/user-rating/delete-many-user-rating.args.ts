import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRatingWhereInput } from './user-rating-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyUserRatingArgs {

    @Field(() => UserRatingWhereInput, {nullable:true})
    @Type(() => UserRatingWhereInput)
    where?: UserRatingWhereInput;
}
