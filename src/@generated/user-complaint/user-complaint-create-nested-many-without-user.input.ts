import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserComplaintCreateWithoutUserInput } from './user-complaint-create-without-user.input';
import { Type } from 'class-transformer';
import { UserComplaintCreateOrConnectWithoutUserInput } from './user-complaint-create-or-connect-without-user.input';
import { UserComplaintCreateManyUserInputEnvelope } from './user-complaint-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserComplaintWhereUniqueInput } from './user-complaint-where-unique.input';

@InputType()
export class UserComplaintCreateNestedManyWithoutUserInput {

    @Field(() => [UserComplaintCreateWithoutUserInput], {nullable:true})
    @Type(() => UserComplaintCreateWithoutUserInput)
    create?: Array<UserComplaintCreateWithoutUserInput>;

    @Field(() => [UserComplaintCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserComplaintCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserComplaintCreateOrConnectWithoutUserInput>;

    @Field(() => UserComplaintCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserComplaintCreateManyUserInputEnvelope)
    createMany?: UserComplaintCreateManyUserInputEnvelope;

    @Field(() => [UserComplaintWhereUniqueInput], {nullable:true})
    @Type(() => UserComplaintWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserComplaintWhereUniqueInput, 'id'>>;
}
