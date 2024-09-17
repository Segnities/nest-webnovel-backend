import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserRatingWhereUniqueInput } from './user-rating-where-unique.input';
import { Type } from 'class-transformer';
import { UserRatingCreateInput } from './user-rating-create.input';
import { UserRatingUpdateInput } from './user-rating-update.input';

@ArgsType()
export class UpsertOneUserRatingArgs {

    @Field(() => UserRatingWhereUniqueInput, {nullable:false})
    @Type(() => UserRatingWhereUniqueInput)
    where!: Prisma.AtLeast<UserRatingWhereUniqueInput, 'id'>;

    @Field(() => UserRatingCreateInput, {nullable:false})
    @Type(() => UserRatingCreateInput)
    create!: UserRatingCreateInput;

    @Field(() => UserRatingUpdateInput, {nullable:false})
    @Type(() => UserRatingUpdateInput)
    update!: UserRatingUpdateInput;
}
