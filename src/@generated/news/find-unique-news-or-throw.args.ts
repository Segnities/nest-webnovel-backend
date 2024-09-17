import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NewsWhereUniqueInput } from './news-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueNewsOrThrowArgs {

    @Field(() => NewsWhereUniqueInput, {nullable:false})
    @Type(() => NewsWhereUniqueInput)
    where!: Prisma.AtLeast<NewsWhereUniqueInput, 'id'>;
}
