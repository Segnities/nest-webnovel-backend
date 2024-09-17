import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommendableTypeWhereUniqueInput } from './commendable-type-where-unique.input';
import { Type } from 'class-transformer';
import { CommendableTypeCreateInput } from './commendable-type-create.input';
import { CommendableTypeUpdateInput } from './commendable-type-update.input';

@ArgsType()
export class UpsertOneCommendableTypeArgs {

    @Field(() => CommendableTypeWhereUniqueInput, {nullable:false})
    @Type(() => CommendableTypeWhereUniqueInput)
    where!: Prisma.AtLeast<CommendableTypeWhereUniqueInput, 'id'>;

    @Field(() => CommendableTypeCreateInput, {nullable:false})
    @Type(() => CommendableTypeCreateInput)
    create!: CommendableTypeCreateInput;

    @Field(() => CommendableTypeUpdateInput, {nullable:false})
    @Type(() => CommendableTypeUpdateInput)
    update!: CommendableTypeUpdateInput;
}
