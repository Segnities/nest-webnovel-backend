import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutUserComplaintsInput } from './user-update-without-user-complaints.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutUserComplaintsInput } from './user-create-without-user-complaints.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutUserComplaintsInput {

    @Field(() => UserUpdateWithoutUserComplaintsInput, {nullable:false})
    @Type(() => UserUpdateWithoutUserComplaintsInput)
    update!: UserUpdateWithoutUserComplaintsInput;

    @Field(() => UserCreateWithoutUserComplaintsInput, {nullable:false})
    @Type(() => UserCreateWithoutUserComplaintsInput)
    create!: UserCreateWithoutUserComplaintsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
