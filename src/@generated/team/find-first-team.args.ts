import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TeamWhereInput } from './team-where.input';
import { Type } from 'class-transformer';
import { TeamOrderByWithRelationInput } from './team-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { TeamWhereUniqueInput } from './team-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TeamScalarFieldEnum } from './team-scalar-field.enum';

@ArgsType()
export class FindFirstTeamArgs {

    @Field(() => TeamWhereInput, {nullable:true})
    @Type(() => TeamWhereInput)
    where?: TeamWhereInput;

    @Field(() => [TeamOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TeamOrderByWithRelationInput>;

    @Field(() => TeamWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TeamWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [TeamScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TeamScalarFieldEnum>;
}
