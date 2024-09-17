import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserComplaintCreateWithoutReasonInput } from './user-complaint-create-without-reason.input';
import { Type } from 'class-transformer';
import { UserComplaintCreateOrConnectWithoutReasonInput } from './user-complaint-create-or-connect-without-reason.input';
import { UserComplaintUpsertWithWhereUniqueWithoutReasonInput } from './user-complaint-upsert-with-where-unique-without-reason.input';
import { UserComplaintCreateManyReasonInputEnvelope } from './user-complaint-create-many-reason-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserComplaintWhereUniqueInput } from './user-complaint-where-unique.input';
import { UserComplaintUpdateWithWhereUniqueWithoutReasonInput } from './user-complaint-update-with-where-unique-without-reason.input';
import { UserComplaintUpdateManyWithWhereWithoutReasonInput } from './user-complaint-update-many-with-where-without-reason.input';
import { UserComplaintScalarWhereInput } from './user-complaint-scalar-where.input';

@InputType()
export class UserComplaintUncheckedUpdateManyWithoutReasonNestedInput {

    @Field(() => [UserComplaintCreateWithoutReasonInput], {nullable:true})
    @Type(() => UserComplaintCreateWithoutReasonInput)
    create?: Array<UserComplaintCreateWithoutReasonInput>;

    @Field(() => [UserComplaintCreateOrConnectWithoutReasonInput], {nullable:true})
    @Type(() => UserComplaintCreateOrConnectWithoutReasonInput)
    connectOrCreate?: Array<UserComplaintCreateOrConnectWithoutReasonInput>;

    @Field(() => [UserComplaintUpsertWithWhereUniqueWithoutReasonInput], {nullable:true})
    @Type(() => UserComplaintUpsertWithWhereUniqueWithoutReasonInput)
    upsert?: Array<UserComplaintUpsertWithWhereUniqueWithoutReasonInput>;

    @Field(() => UserComplaintCreateManyReasonInputEnvelope, {nullable:true})
    @Type(() => UserComplaintCreateManyReasonInputEnvelope)
    createMany?: UserComplaintCreateManyReasonInputEnvelope;

    @Field(() => [UserComplaintWhereUniqueInput], {nullable:true})
    @Type(() => UserComplaintWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserComplaintWhereUniqueInput, 'id'>>;

    @Field(() => [UserComplaintWhereUniqueInput], {nullable:true})
    @Type(() => UserComplaintWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserComplaintWhereUniqueInput, 'id'>>;

    @Field(() => [UserComplaintWhereUniqueInput], {nullable:true})
    @Type(() => UserComplaintWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserComplaintWhereUniqueInput, 'id'>>;

    @Field(() => [UserComplaintWhereUniqueInput], {nullable:true})
    @Type(() => UserComplaintWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserComplaintWhereUniqueInput, 'id'>>;

    @Field(() => [UserComplaintUpdateWithWhereUniqueWithoutReasonInput], {nullable:true})
    @Type(() => UserComplaintUpdateWithWhereUniqueWithoutReasonInput)
    update?: Array<UserComplaintUpdateWithWhereUniqueWithoutReasonInput>;

    @Field(() => [UserComplaintUpdateManyWithWhereWithoutReasonInput], {nullable:true})
    @Type(() => UserComplaintUpdateManyWithWhereWithoutReasonInput)
    updateMany?: Array<UserComplaintUpdateManyWithWhereWithoutReasonInput>;

    @Field(() => [UserComplaintScalarWhereInput], {nullable:true})
    @Type(() => UserComplaintScalarWhereInput)
    deleteMany?: Array<UserComplaintScalarWhereInput>;
}
