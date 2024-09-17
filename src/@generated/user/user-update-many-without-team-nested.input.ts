import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutTeamInput } from './user-create-without-team.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutTeamInput } from './user-create-or-connect-without-team.input';
import { UserUpsertWithWhereUniqueWithoutTeamInput } from './user-upsert-with-where-unique-without-team.input';
import { UserCreateManyTeamInputEnvelope } from './user-create-many-team-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutTeamInput } from './user-update-with-where-unique-without-team.input';
import { UserUpdateManyWithWhereWithoutTeamInput } from './user-update-many-with-where-without-team.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUpdateManyWithoutTeamNestedInput {

    @Field(() => [UserCreateWithoutTeamInput], {nullable:true})
    @Type(() => UserCreateWithoutTeamInput)
    create?: Array<UserCreateWithoutTeamInput>;

    @Field(() => [UserCreateOrConnectWithoutTeamInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutTeamInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutTeamInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutTeamInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutTeamInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutTeamInput>;

    @Field(() => UserCreateManyTeamInputEnvelope, {nullable:true})
    @Type(() => UserCreateManyTeamInputEnvelope)
    createMany?: UserCreateManyTeamInputEnvelope;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutTeamInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutTeamInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutTeamInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutTeamInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutTeamInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutTeamInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}
