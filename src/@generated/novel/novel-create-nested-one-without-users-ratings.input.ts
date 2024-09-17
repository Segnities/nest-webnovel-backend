import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelCreateWithoutUsersRatingsInput } from './novel-create-without-users-ratings.input';
import { Type } from 'class-transformer';
import { NovelCreateOrConnectWithoutUsersRatingsInput } from './novel-create-or-connect-without-users-ratings.input';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';

@InputType()
export class NovelCreateNestedOneWithoutUsersRatingsInput {

    @Field(() => NovelCreateWithoutUsersRatingsInput, {nullable:true})
    @Type(() => NovelCreateWithoutUsersRatingsInput)
    create?: NovelCreateWithoutUsersRatingsInput;

    @Field(() => NovelCreateOrConnectWithoutUsersRatingsInput, {nullable:true})
    @Type(() => NovelCreateOrConnectWithoutUsersRatingsInput)
    connectOrCreate?: NovelCreateOrConnectWithoutUsersRatingsInput;

    @Field(() => NovelWhereUniqueInput, {nullable:true})
    @Type(() => NovelWhereUniqueInput)
    connect?: Prisma.AtLeast<NovelWhereUniqueInput, 'id'>;
}
