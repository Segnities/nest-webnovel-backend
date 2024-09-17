import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserComplaintCreateWithoutUserInput } from './user-complaint-create-without-user.input';
import { Type } from 'class-transformer';
import { UserComplaintCreateOrConnectWithoutUserInput } from './user-complaint-create-or-connect-without-user.input';
import { UserComplaintUpsertWithWhereUniqueWithoutUserInput } from './user-complaint-upsert-with-where-unique-without-user.input';
import { UserComplaintCreateManyUserInputEnvelope } from './user-complaint-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserComplaintWhereUniqueInput } from './user-complaint-where-unique.input';
import { UserComplaintUpdateWithWhereUniqueWithoutUserInput } from './user-complaint-update-with-where-unique-without-user.input';
import { UserComplaintUpdateManyWithWhereWithoutUserInput } from './user-complaint-update-many-with-where-without-user.input';
import { UserComplaintScalarWhereInput } from './user-complaint-scalar-where.input';

@InputType()
export class UserComplaintUpdateManyWithoutUserNestedInput {

    @Field(() => [UserComplaintCreateWithoutUserInput], {nullable:true})
    @Type(() => UserComplaintCreateWithoutUserInput)
    create?: Array<UserComplaintCreateWithoutUserInput>;

    @Field(() => [UserComplaintCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserComplaintCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserComplaintCreateOrConnectWithoutUserInput>;

    @Field(() => [UserComplaintUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserComplaintUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<UserComplaintUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => UserComplaintCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserComplaintCreateManyUserInputEnvelope)
    createMany?: UserComplaintCreateManyUserInputEnvelope;

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

    @Field(() => [UserComplaintUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserComplaintUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<UserComplaintUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [UserComplaintUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => UserComplaintUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<UserComplaintUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [UserComplaintScalarWhereInput], {nullable:true})
    @Type(() => UserComplaintScalarWhereInput)
    deleteMany?: Array<UserComplaintScalarWhereInput>;
}
