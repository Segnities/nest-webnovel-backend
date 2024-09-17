import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommendableTypeWhereUniqueInput } from './commendable-type-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueCommendableTypeOrThrowArgs {

    @Field(() => CommendableTypeWhereUniqueInput, {nullable:false})
    @Type(() => CommendableTypeWhereUniqueInput)
    where!: Prisma.AtLeast<CommendableTypeWhereUniqueInput, 'id'>;
}
