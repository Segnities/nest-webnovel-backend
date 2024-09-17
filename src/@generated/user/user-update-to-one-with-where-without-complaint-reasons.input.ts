import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutComplaintReasonsInput } from './user-update-without-complaint-reasons.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutComplaintReasonsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutComplaintReasonsInput, {nullable:false})
    @Type(() => UserUpdateWithoutComplaintReasonsInput)
    data!: UserUpdateWithoutComplaintReasonsInput;
}
