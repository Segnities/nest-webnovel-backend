import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AlternativeTitleWhereUniqueInput } from './alternative-title-where-unique.input';
import { Type } from 'class-transformer';
import { AlternativeTitleCreateInput } from './alternative-title-create.input';
import { AlternativeTitleUpdateInput } from './alternative-title-update.input';

@ArgsType()
export class UpsertOneAlternativeTitleArgs {

    @Field(() => AlternativeTitleWhereUniqueInput, {nullable:false})
    @Type(() => AlternativeTitleWhereUniqueInput)
    where!: Prisma.AtLeast<AlternativeTitleWhereUniqueInput, 'id'>;

    @Field(() => AlternativeTitleCreateInput, {nullable:false})
    @Type(() => AlternativeTitleCreateInput)
    create!: AlternativeTitleCreateInput;

    @Field(() => AlternativeTitleUpdateInput, {nullable:false})
    @Type(() => AlternativeTitleUpdateInput)
    update!: AlternativeTitleUpdateInput;
}
