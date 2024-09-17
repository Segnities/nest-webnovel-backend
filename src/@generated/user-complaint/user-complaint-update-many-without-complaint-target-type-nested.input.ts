import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserComplaintCreateWithoutComplaintTargetTypeInput } from './user-complaint-create-without-complaint-target-type.input';
import { Type } from 'class-transformer';
import { UserComplaintCreateOrConnectWithoutComplaintTargetTypeInput } from './user-complaint-create-or-connect-without-complaint-target-type.input';
import { UserComplaintUpsertWithWhereUniqueWithoutComplaintTargetTypeInput } from './user-complaint-upsert-with-where-unique-without-complaint-target-type.input';
import { UserComplaintCreateManyComplaintTargetTypeInputEnvelope } from './user-complaint-create-many-complaint-target-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserComplaintWhereUniqueInput } from './user-complaint-where-unique.input';
import { UserComplaintUpdateWithWhereUniqueWithoutComplaintTargetTypeInput } from './user-complaint-update-with-where-unique-without-complaint-target-type.input';
import { UserComplaintUpdateManyWithWhereWithoutComplaintTargetTypeInput } from './user-complaint-update-many-with-where-without-complaint-target-type.input';
import { UserComplaintScalarWhereInput } from './user-complaint-scalar-where.input';

@InputType()
export class UserComplaintUpdateManyWithoutComplaintTargetTypeNestedInput {

    @Field(() => [UserComplaintCreateWithoutComplaintTargetTypeInput], {nullable:true})
    @Type(() => UserComplaintCreateWithoutComplaintTargetTypeInput)
    create?: Array<UserComplaintCreateWithoutComplaintTargetTypeInput>;

    @Field(() => [UserComplaintCreateOrConnectWithoutComplaintTargetTypeInput], {nullable:true})
    @Type(() => UserComplaintCreateOrConnectWithoutComplaintTargetTypeInput)
    connectOrCreate?: Array<UserComplaintCreateOrConnectWithoutComplaintTargetTypeInput>;

    @Field(() => [UserComplaintUpsertWithWhereUniqueWithoutComplaintTargetTypeInput], {nullable:true})
    @Type(() => UserComplaintUpsertWithWhereUniqueWithoutComplaintTargetTypeInput)
    upsert?: Array<UserComplaintUpsertWithWhereUniqueWithoutComplaintTargetTypeInput>;

    @Field(() => UserComplaintCreateManyComplaintTargetTypeInputEnvelope, {nullable:true})
    @Type(() => UserComplaintCreateManyComplaintTargetTypeInputEnvelope)
    createMany?: UserComplaintCreateManyComplaintTargetTypeInputEnvelope;

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

    @Field(() => [UserComplaintUpdateWithWhereUniqueWithoutComplaintTargetTypeInput], {nullable:true})
    @Type(() => UserComplaintUpdateWithWhereUniqueWithoutComplaintTargetTypeInput)
    update?: Array<UserComplaintUpdateWithWhereUniqueWithoutComplaintTargetTypeInput>;

    @Field(() => [UserComplaintUpdateManyWithWhereWithoutComplaintTargetTypeInput], {nullable:true})
    @Type(() => UserComplaintUpdateManyWithWhereWithoutComplaintTargetTypeInput)
    updateMany?: Array<UserComplaintUpdateManyWithWhereWithoutComplaintTargetTypeInput>;

    @Field(() => [UserComplaintScalarWhereInput], {nullable:true})
    @Type(() => UserComplaintScalarWhereInput)
    deleteMany?: Array<UserComplaintScalarWhereInput>;
}
