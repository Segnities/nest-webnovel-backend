import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommendableTypeWhereInput } from './commendable-type-where.input';
import { Type } from 'class-transformer';
import { CommendableTypeOrderByWithRelationInput } from './commendable-type-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CommendableTypeWhereUniqueInput } from './commendable-type-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CommendableTypeScalarFieldEnum } from './commendable-type-scalar-field.enum';

@ArgsType()
export class FindFirstCommendableTypeOrThrowArgs {

    @Field(() => CommendableTypeWhereInput, {nullable:true})
    @Type(() => CommendableTypeWhereInput)
    where?: CommendableTypeWhereInput;

    @Field(() => [CommendableTypeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CommendableTypeOrderByWithRelationInput>;

    @Field(() => CommendableTypeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CommendableTypeWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CommendableTypeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CommendableTypeScalarFieldEnum>;
}
