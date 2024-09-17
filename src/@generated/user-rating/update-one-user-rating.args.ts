import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRatingUpdateInput } from './user-rating-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { UserRatingWhereUniqueInput } from './user-rating-where-unique.input';

@ArgsType()
export class UpdateOneUserRatingArgs {

    @Field(() => UserRatingUpdateInput, {nullable:false})
    @Type(() => UserRatingUpdateInput)
    data!: UserRatingUpdateInput;

    @Field(() => UserRatingWhereUniqueInput, {nullable:false})
    @Type(() => UserRatingWhereUniqueInput)
    where!: Prisma.AtLeast<UserRatingWhereUniqueInput, 'id'>;
}
