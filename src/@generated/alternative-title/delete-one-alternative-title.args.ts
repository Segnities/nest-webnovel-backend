import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AlternativeTitleWhereUniqueInput } from './alternative-title-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneAlternativeTitleArgs {

    @Field(() => AlternativeTitleWhereUniqueInput, {nullable:false})
    @Type(() => AlternativeTitleWhereUniqueInput)
    where!: Prisma.AtLeast<AlternativeTitleWhereUniqueInput, 'id'>;
}
