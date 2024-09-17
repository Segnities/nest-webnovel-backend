import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeamCreateWithoutUsersInput } from './team-create-without-users.input';
import { Type } from 'class-transformer';
import { TeamCreateOrConnectWithoutUsersInput } from './team-create-or-connect-without-users.input';
import { TeamUpsertWithoutUsersInput } from './team-upsert-without-users.input';
import { TeamWhereInput } from './team-where.input';
import { Prisma } from '@prisma/client';
import { TeamWhereUniqueInput } from './team-where-unique.input';
import { TeamUpdateToOneWithWhereWithoutUsersInput } from './team-update-to-one-with-where-without-users.input';

@InputType()
export class TeamUpdateOneWithoutUsersNestedInput {

    @Field(() => TeamCreateWithoutUsersInput, {nullable:true})
    @Type(() => TeamCreateWithoutUsersInput)
    create?: TeamCreateWithoutUsersInput;

    @Field(() => TeamCreateOrConnectWithoutUsersInput, {nullable:true})
    @Type(() => TeamCreateOrConnectWithoutUsersInput)
    connectOrCreate?: TeamCreateOrConnectWithoutUsersInput;

    @Field(() => TeamUpsertWithoutUsersInput, {nullable:true})
    @Type(() => TeamUpsertWithoutUsersInput)
    upsert?: TeamUpsertWithoutUsersInput;

    @Field(() => TeamWhereInput, {nullable:true})
    @Type(() => TeamWhereInput)
    disconnect?: TeamWhereInput;

    @Field(() => TeamWhereInput, {nullable:true})
    @Type(() => TeamWhereInput)
    delete?: TeamWhereInput;

    @Field(() => TeamWhereUniqueInput, {nullable:true})
    @Type(() => TeamWhereUniqueInput)
    connect?: Prisma.AtLeast<TeamWhereUniqueInput, 'id'>;

    @Field(() => TeamUpdateToOneWithWhereWithoutUsersInput, {nullable:true})
    @Type(() => TeamUpdateToOneWithWhereWithoutUsersInput)
    update?: TeamUpdateToOneWithWhereWithoutUsersInput;
}
