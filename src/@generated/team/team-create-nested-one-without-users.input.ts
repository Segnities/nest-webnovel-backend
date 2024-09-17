import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeamCreateWithoutUsersInput } from './team-create-without-users.input';
import { Type } from 'class-transformer';
import { TeamCreateOrConnectWithoutUsersInput } from './team-create-or-connect-without-users.input';
import { Prisma } from '@prisma/client';
import { TeamWhereUniqueInput } from './team-where-unique.input';

@InputType()
export class TeamCreateNestedOneWithoutUsersInput {

    @Field(() => TeamCreateWithoutUsersInput, {nullable:true})
    @Type(() => TeamCreateWithoutUsersInput)
    create?: TeamCreateWithoutUsersInput;

    @Field(() => TeamCreateOrConnectWithoutUsersInput, {nullable:true})
    @Type(() => TeamCreateOrConnectWithoutUsersInput)
    connectOrCreate?: TeamCreateOrConnectWithoutUsersInput;

    @Field(() => TeamWhereUniqueInput, {nullable:true})
    @Type(() => TeamWhereUniqueInput)
    connect?: Prisma.AtLeast<TeamWhereUniqueInput, 'id'>;
}
