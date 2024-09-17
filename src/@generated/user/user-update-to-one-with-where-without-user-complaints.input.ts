import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutUserComplaintsInput } from './user-update-without-user-complaints.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutUserComplaintsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutUserComplaintsInput, {nullable:false})
    @Type(() => UserUpdateWithoutUserComplaintsInput)
    data!: UserUpdateWithoutUserComplaintsInput;
}
