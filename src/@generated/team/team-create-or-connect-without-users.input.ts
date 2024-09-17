import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TeamWhereUniqueInput } from './team-where-unique.input';
import { Type } from 'class-transformer';
import { TeamCreateWithoutUsersInput } from './team-create-without-users.input';

@InputType()
export class TeamCreateOrConnectWithoutUsersInput {

    @Field(() => TeamWhereUniqueInput, {nullable:false})
    @Type(() => TeamWhereUniqueInput)
    where!: Prisma.AtLeast<TeamWhereUniqueInput, 'id'>;

    @Field(() => TeamCreateWithoutUsersInput, {nullable:false})
    @Type(() => TeamCreateWithoutUsersInput)
    create!: TeamCreateWithoutUsersInput;
}
