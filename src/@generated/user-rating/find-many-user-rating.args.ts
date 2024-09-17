import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRatingWhereInput } from './user-rating-where.input';
import { Type } from 'class-transformer';
import { UserRatingOrderByWithRelationInput } from './user-rating-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { UserRatingWhereUniqueInput } from './user-rating-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserRatingScalarFieldEnum } from './user-rating-scalar-field.enum';

@ArgsType()
export class FindManyUserRatingArgs {

    @Field(() => UserRatingWhereInput, {nullable:true})
    @Type(() => UserRatingWhereInput)
    where?: UserRatingWhereInput;

    @Field(() => [UserRatingOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserRatingOrderByWithRelationInput>;

    @Field(() => UserRatingWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserRatingWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [UserRatingScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserRatingScalarFieldEnum>;
}
