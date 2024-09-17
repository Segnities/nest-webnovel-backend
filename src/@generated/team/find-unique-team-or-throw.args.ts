import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TeamWhereUniqueInput } from './team-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueTeamOrThrowArgs {

    @Field(() => TeamWhereUniqueInput, {nullable:false})
    @Type(() => TeamWhereUniqueInput)
    where!: Prisma.AtLeast<TeamWhereUniqueInput, 'id'>;
}
