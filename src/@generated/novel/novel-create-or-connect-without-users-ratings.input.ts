import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';
import { Type } from 'class-transformer';
import { NovelCreateWithoutUsersRatingsInput } from './novel-create-without-users-ratings.input';

@InputType()
export class NovelCreateOrConnectWithoutUsersRatingsInput {

    @Field(() => NovelWhereUniqueInput, {nullable:false})
    @Type(() => NovelWhereUniqueInput)
    where!: Prisma.AtLeast<NovelWhereUniqueInput, 'id'>;

    @Field(() => NovelCreateWithoutUsersRatingsInput, {nullable:false})
    @Type(() => NovelCreateWithoutUsersRatingsInput)
    create!: NovelCreateWithoutUsersRatingsInput;
}
