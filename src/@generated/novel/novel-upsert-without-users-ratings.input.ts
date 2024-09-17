import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelUpdateWithoutUsersRatingsInput } from './novel-update-without-users-ratings.input';
import { Type } from 'class-transformer';
import { NovelCreateWithoutUsersRatingsInput } from './novel-create-without-users-ratings.input';
import { NovelWhereInput } from './novel-where.input';

@InputType()
export class NovelUpsertWithoutUsersRatingsInput {

    @Field(() => NovelUpdateWithoutUsersRatingsInput, {nullable:false})
    @Type(() => NovelUpdateWithoutUsersRatingsInput)
    update!: NovelUpdateWithoutUsersRatingsInput;

    @Field(() => NovelCreateWithoutUsersRatingsInput, {nullable:false})
    @Type(() => NovelCreateWithoutUsersRatingsInput)
    create!: NovelCreateWithoutUsersRatingsInput;

    @Field(() => NovelWhereInput, {nullable:true})
    @Type(() => NovelWhereInput)
    where?: NovelWhereInput;
}
