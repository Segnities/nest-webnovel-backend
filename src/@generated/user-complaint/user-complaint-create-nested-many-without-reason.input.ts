import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserComplaintCreateWithoutReasonInput } from './user-complaint-create-without-reason.input';
import { Type } from 'class-transformer';
import { UserComplaintCreateOrConnectWithoutReasonInput } from './user-complaint-create-or-connect-without-reason.input';
import { UserComplaintCreateManyReasonInputEnvelope } from './user-complaint-create-many-reason-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserComplaintWhereUniqueInput } from './user-complaint-where-unique.input';

@InputType()
export class UserComplaintCreateNestedManyWithoutReasonInput {

    @Field(() => [UserComplaintCreateWithoutReasonInput], {nullable:true})
    @Type(() => UserComplaintCreateWithoutReasonInput)
    create?: Array<UserComplaintCreateWithoutReasonInput>;

    @Field(() => [UserComplaintCreateOrConnectWithoutReasonInput], {nullable:true})
    @Type(() => UserComplaintCreateOrConnectWithoutReasonInput)
    connectOrCreate?: Array<UserComplaintCreateOrConnectWithoutReasonInput>;

    @Field(() => UserComplaintCreateManyReasonInputEnvelope, {nullable:true})
    @Type(() => UserComplaintCreateManyReasonInputEnvelope)
    createMany?: UserComplaintCreateManyReasonInputEnvelope;

    @Field(() => [UserComplaintWhereUniqueInput], {nullable:true})
    @Type(() => UserComplaintWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserComplaintWhereUniqueInput, 'id'>>;
}
