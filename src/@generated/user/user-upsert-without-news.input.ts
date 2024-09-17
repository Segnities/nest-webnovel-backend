import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutNewsInput } from './user-update-without-news.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutNewsInput } from './user-create-without-news.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutNewsInput {

    @Field(() => UserUpdateWithoutNewsInput, {nullable:false})
    @Type(() => UserUpdateWithoutNewsInput)
    update!: UserUpdateWithoutNewsInput;

    @Field(() => UserCreateWithoutNewsInput, {nullable:false})
    @Type(() => UserCreateWithoutNewsInput)
    create!: UserCreateWithoutNewsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
