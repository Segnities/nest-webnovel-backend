import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelCreateWithoutUsersRatingsInput } from './novel-create-without-users-ratings.input';
import { Type } from 'class-transformer';
import { NovelCreateOrConnectWithoutUsersRatingsInput } from './novel-create-or-connect-without-users-ratings.input';
import { NovelUpsertWithoutUsersRatingsInput } from './novel-upsert-without-users-ratings.input';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';
import { NovelUpdateToOneWithWhereWithoutUsersRatingsInput } from './novel-update-to-one-with-where-without-users-ratings.input';

@InputType()
export class NovelUpdateOneRequiredWithoutUsersRatingsNestedInput {

    @Field(() => NovelCreateWithoutUsersRatingsInput, {nullable:true})
    @Type(() => NovelCreateWithoutUsersRatingsInput)
    create?: NovelCreateWithoutUsersRatingsInput;

    @Field(() => NovelCreateOrConnectWithoutUsersRatingsInput, {nullable:true})
    @Type(() => NovelCreateOrConnectWithoutUsersRatingsInput)
    connectOrCreate?: NovelCreateOrConnectWithoutUsersRatingsInput;

    @Field(() => NovelUpsertWithoutUsersRatingsInput, {nullable:true})
    @Type(() => NovelUpsertWithoutUsersRatingsInput)
    upsert?: NovelUpsertWithoutUsersRatingsInput;

    @Field(() => NovelWhereUniqueInput, {nullable:true})
    @Type(() => NovelWhereUniqueInput)
    connect?: Prisma.AtLeast<NovelWhereUniqueInput, 'id'>;

    @Field(() => NovelUpdateToOneWithWhereWithoutUsersRatingsInput, {nullable:true})
    @Type(() => NovelUpdateToOneWithWhereWithoutUsersRatingsInput)
    update?: NovelUpdateToOneWithWhereWithoutUsersRatingsInput;
}
