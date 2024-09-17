import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NewsWhereUniqueInput } from './news-where-unique.input';
import { Type } from 'class-transformer';
import { NewsCreateInput } from './news-create.input';
import { NewsUpdateInput } from './news-update.input';

@ArgsType()
export class UpsertOneNewsArgs {

    @Field(() => NewsWhereUniqueInput, {nullable:false})
    @Type(() => NewsWhereUniqueInput)
    where!: Prisma.AtLeast<NewsWhereUniqueInput, 'id'>;

    @Field(() => NewsCreateInput, {nullable:false})
    @Type(() => NewsCreateInput)
    create!: NewsCreateInput;

    @Field(() => NewsUpdateInput, {nullable:false})
    @Type(() => NewsUpdateInput)
    update!: NewsUpdateInput;
}
