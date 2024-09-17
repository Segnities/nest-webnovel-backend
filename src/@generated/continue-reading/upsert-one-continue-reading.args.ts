import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ContinueReadingWhereUniqueInput } from './continue-reading-where-unique.input';
import { Type } from 'class-transformer';
import { ContinueReadingCreateInput } from './continue-reading-create.input';
import { ContinueReadingUpdateInput } from './continue-reading-update.input';

@ArgsType()
export class UpsertOneContinueReadingArgs {

    @Field(() => ContinueReadingWhereUniqueInput, {nullable:false})
    @Type(() => ContinueReadingWhereUniqueInput)
    where!: Prisma.AtLeast<ContinueReadingWhereUniqueInput, 'id'>;

    @Field(() => ContinueReadingCreateInput, {nullable:false})
    @Type(() => ContinueReadingCreateInput)
    create!: ContinueReadingCreateInput;

    @Field(() => ContinueReadingUpdateInput, {nullable:false})
    @Type(() => ContinueReadingUpdateInput)
    update!: ContinueReadingUpdateInput;
}
