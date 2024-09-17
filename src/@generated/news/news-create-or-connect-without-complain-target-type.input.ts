import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NewsWhereUniqueInput } from './news-where-unique.input';
import { Type } from 'class-transformer';
import { NewsCreateWithoutComplainTargetTypeInput } from './news-create-without-complain-target-type.input';

@InputType()
export class NewsCreateOrConnectWithoutComplainTargetTypeInput {

    @Field(() => NewsWhereUniqueInput, {nullable:false})
    @Type(() => NewsWhereUniqueInput)
    where!: Prisma.AtLeast<NewsWhereUniqueInput, 'id'>;

    @Field(() => NewsCreateWithoutComplainTargetTypeInput, {nullable:false})
    @Type(() => NewsCreateWithoutComplainTargetTypeInput)
    create!: NewsCreateWithoutComplainTargetTypeInput;
}
