import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutUserBansInput } from './user-update-without-user-bans.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutUserBansInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutUserBansInput, {nullable:false})
    @Type(() => UserUpdateWithoutUserBansInput)
    data!: UserUpdateWithoutUserBansInput;
}
