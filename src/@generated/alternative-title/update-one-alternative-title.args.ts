import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AlternativeTitleUpdateInput } from './alternative-title-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { AlternativeTitleWhereUniqueInput } from './alternative-title-where-unique.input';

@ArgsType()
export class UpdateOneAlternativeTitleArgs {

    @Field(() => AlternativeTitleUpdateInput, {nullable:false})
    @Type(() => AlternativeTitleUpdateInput)
    data!: AlternativeTitleUpdateInput;

    @Field(() => AlternativeTitleWhereUniqueInput, {nullable:false})
    @Type(() => AlternativeTitleWhereUniqueInput)
    where!: Prisma.AtLeast<AlternativeTitleWhereUniqueInput, 'id'>;
}
