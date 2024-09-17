import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserComplaintWhereUniqueInput } from './user-complaint-where-unique.input';
import { Type } from 'class-transformer';
import { UserComplaintCreateWithoutComplaintTargetTypeInput } from './user-complaint-create-without-complaint-target-type.input';

@InputType()
export class UserComplaintCreateOrConnectWithoutComplaintTargetTypeInput {

    @Field(() => UserComplaintWhereUniqueInput, {nullable:false})
    @Type(() => UserComplaintWhereUniqueInput)
    where!: Prisma.AtLeast<UserComplaintWhereUniqueInput, 'id'>;

    @Field(() => UserComplaintCreateWithoutComplaintTargetTypeInput, {nullable:false})
    @Type(() => UserComplaintCreateWithoutComplaintTargetTypeInput)
    create!: UserComplaintCreateWithoutComplaintTargetTypeInput;
}
