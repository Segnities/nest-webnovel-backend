import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutIssuedBansInput } from './user-update-without-issued-bans.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutIssuedBansInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutIssuedBansInput, {nullable:false})
    @Type(() => UserUpdateWithoutIssuedBansInput)
    data!: UserUpdateWithoutIssuedBansInput;
}
