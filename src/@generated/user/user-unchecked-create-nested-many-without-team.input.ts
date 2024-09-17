import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutTeamInput } from './user-create-without-team.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutTeamInput } from './user-create-or-connect-without-team.input';
import { UserCreateManyTeamInputEnvelope } from './user-create-many-team-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUncheckedCreateNestedManyWithoutTeamInput {

    @Field(() => [UserCreateWithoutTeamInput], {nullable:true})
    @Type(() => UserCreateWithoutTeamInput)
    create?: Array<UserCreateWithoutTeamInput>;

    @Field(() => [UserCreateOrConnectWithoutTeamInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutTeamInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutTeamInput>;

    @Field(() => UserCreateManyTeamInputEnvelope, {nullable:true})
    @Type(() => UserCreateManyTeamInputEnvelope)
    createMany?: UserCreateManyTeamInputEnvelope;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>>;
}
