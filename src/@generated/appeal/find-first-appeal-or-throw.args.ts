import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppealWhereInput } from './appeal-where.input';
import { Type } from 'class-transformer';
import { AppealOrderByWithRelationInput } from './appeal-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AppealWhereUniqueInput } from './appeal-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AppealScalarFieldEnum } from './appeal-scalar-field.enum';

@ArgsType()
export class FindFirstAppealOrThrowArgs {

    @Field(() => AppealWhereInput, {nullable:true})
    @Type(() => AppealWhereInput)
    where?: AppealWhereInput;

    @Field(() => [AppealOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AppealOrderByWithRelationInput>;

    @Field(() => AppealWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AppealWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AppealScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AppealScalarFieldEnum>;
}
