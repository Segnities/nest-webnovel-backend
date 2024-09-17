import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelWhereInput } from './novel-where.input';
import { Type } from 'class-transformer';
import { NovelUpdateWithoutUsersRatingsInput } from './novel-update-without-users-ratings.input';

@InputType()
export class NovelUpdateToOneWithWhereWithoutUsersRatingsInput {

    @Field(() => NovelWhereInput, {nullable:true})
    @Type(() => NovelWhereInput)
    where?: NovelWhereInput;

    @Field(() => NovelUpdateWithoutUsersRatingsInput, {nullable:false})
    @Type(() => NovelUpdateWithoutUsersRatingsInput)
    data!: NovelUpdateWithoutUsersRatingsInput;
}
