import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommendableTypeUpdateInput } from './commendable-type-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CommendableTypeWhereUniqueInput } from './commendable-type-where-unique.input';

@ArgsType()
export class UpdateOneCommendableTypeArgs {

    @Field(() => CommendableTypeUpdateInput, {nullable:false})
    @Type(() => CommendableTypeUpdateInput)
    data!: CommendableTypeUpdateInput;

    @Field(() => CommendableTypeWhereUniqueInput, {nullable:false})
    @Type(() => CommendableTypeWhereUniqueInput)
    where!: Prisma.AtLeast<CommendableTypeWhereUniqueInput, 'id'>;
}
