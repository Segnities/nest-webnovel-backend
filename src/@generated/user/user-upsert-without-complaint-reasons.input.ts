import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutComplaintReasonsInput } from './user-update-without-complaint-reasons.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutComplaintReasonsInput } from './user-create-without-complaint-reasons.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutComplaintReasonsInput {

    @Field(() => UserUpdateWithoutComplaintReasonsInput, {nullable:false})
    @Type(() => UserUpdateWithoutComplaintReasonsInput)
    update!: UserUpdateWithoutComplaintReasonsInput;

    @Field(() => UserCreateWithoutComplaintReasonsInput, {nullable:false})
    @Type(() => UserCreateWithoutComplaintReasonsInput)
    create!: UserCreateWithoutComplaintReasonsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
