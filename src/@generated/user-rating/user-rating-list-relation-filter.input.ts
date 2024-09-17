import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRatingWhereInput } from './user-rating-where.input';

@InputType()
export class UserRatingListRelationFilter {

    @Field(() => UserRatingWhereInput, {nullable:true})
    every?: UserRatingWhereInput;

    @Field(() => UserRatingWhereInput, {nullable:true})
    some?: UserRatingWhereInput;

    @Field(() => UserRatingWhereInput, {nullable:true})
    none?: UserRatingWhereInput;
}
