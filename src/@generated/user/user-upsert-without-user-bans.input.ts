import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutUserBansInput } from './user-update-without-user-bans.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutUserBansInput } from './user-create-without-user-bans.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutUserBansInput {

    @Field(() => UserUpdateWithoutUserBansInput, {nullable:false})
    @Type(() => UserUpdateWithoutUserBansInput)
    update!: UserUpdateWithoutUserBansInput;

    @Field(() => UserCreateWithoutUserBansInput, {nullable:false})
    @Type(() => UserCreateWithoutUserBansInput)
    create!: UserCreateWithoutUserBansInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
