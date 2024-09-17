import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutIssuedBansInput } from './user-update-without-issued-bans.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutIssuedBansInput } from './user-create-without-issued-bans.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutIssuedBansInput {

    @Field(() => UserUpdateWithoutIssuedBansInput, {nullable:false})
    @Type(() => UserUpdateWithoutIssuedBansInput)
    update!: UserUpdateWithoutIssuedBansInput;

    @Field(() => UserCreateWithoutIssuedBansInput, {nullable:false})
    @Type(() => UserCreateWithoutIssuedBansInput)
    create!: UserCreateWithoutIssuedBansInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
