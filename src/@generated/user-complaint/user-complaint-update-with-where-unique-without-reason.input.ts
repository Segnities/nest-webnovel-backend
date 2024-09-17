import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserComplaintWhereUniqueInput } from './user-complaint-where-unique.input';
import { Type } from 'class-transformer';
import { UserComplaintUpdateWithoutReasonInput } from './user-complaint-update-without-reason.input';

@InputType()
export class UserComplaintUpdateWithWhereUniqueWithoutReasonInput {

    @Field(() => UserComplaintWhereUniqueInput, {nullable:false})
    @Type(() => UserComplaintWhereUniqueInput)
    where!: Prisma.AtLeast<UserComplaintWhereUniqueInput, 'id'>;

    @Field(() => UserComplaintUpdateWithoutReasonInput, {nullable:false})
    @Type(() => UserComplaintUpdateWithoutReasonInput)
    data!: UserComplaintUpdateWithoutReasonInput;
}
