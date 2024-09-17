import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserComplaintCreateWithoutComplaintTargetTypeInput } from './user-complaint-create-without-complaint-target-type.input';
import { Type } from 'class-transformer';
import { UserComplaintCreateOrConnectWithoutComplaintTargetTypeInput } from './user-complaint-create-or-connect-without-complaint-target-type.input';
import { UserComplaintCreateManyComplaintTargetTypeInputEnvelope } from './user-complaint-create-many-complaint-target-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserComplaintWhereUniqueInput } from './user-complaint-where-unique.input';

@InputType()
export class UserComplaintCreateNestedManyWithoutComplaintTargetTypeInput {

    @Field(() => [UserComplaintCreateWithoutComplaintTargetTypeInput], {nullable:true})
    @Type(() => UserComplaintCreateWithoutComplaintTargetTypeInput)
    create?: Array<UserComplaintCreateWithoutComplaintTargetTypeInput>;

    @Field(() => [UserComplaintCreateOrConnectWithoutComplaintTargetTypeInput], {nullable:true})
    @Type(() => UserComplaintCreateOrConnectWithoutComplaintTargetTypeInput)
    connectOrCreate?: Array<UserComplaintCreateOrConnectWithoutComplaintTargetTypeInput>;

    @Field(() => UserComplaintCreateManyComplaintTargetTypeInputEnvelope, {nullable:true})
    @Type(() => UserComplaintCreateManyComplaintTargetTypeInputEnvelope)
    createMany?: UserComplaintCreateManyComplaintTargetTypeInputEnvelope;

    @Field(() => [UserComplaintWhereUniqueInput], {nullable:true})
    @Type(() => UserComplaintWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserComplaintWhereUniqueInput, 'id'>>;
}
