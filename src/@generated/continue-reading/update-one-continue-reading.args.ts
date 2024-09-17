import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContinueReadingUpdateInput } from './continue-reading-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ContinueReadingWhereUniqueInput } from './continue-reading-where-unique.input';

@ArgsType()
export class UpdateOneContinueReadingArgs {

    @Field(() => ContinueReadingUpdateInput, {nullable:false})
    @Type(() => ContinueReadingUpdateInput)
    data!: ContinueReadingUpdateInput;

    @Field(() => ContinueReadingWhereUniqueInput, {nullable:false})
    @Type(() => ContinueReadingWhereUniqueInput)
    where!: Prisma.AtLeast<ContinueReadingWhereUniqueInput, 'id'>;
}
