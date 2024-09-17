import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NewsWhereUniqueInput } from './news-where-unique.input';
import { Type } from 'class-transformer';
import { NewsUpdateWithoutComplainTargetTypeInput } from './news-update-without-complain-target-type.input';

@InputType()
export class NewsUpdateWithWhereUniqueWithoutComplainTargetTypeInput {

    @Field(() => NewsWhereUniqueInput, {nullable:false})
    @Type(() => NewsWhereUniqueInput)
    where!: Prisma.AtLeast<NewsWhereUniqueInput, 'id'>;

    @Field(() => NewsUpdateWithoutComplainTargetTypeInput, {nullable:false})
    @Type(() => NewsUpdateWithoutComplainTargetTypeInput)
    data!: NewsUpdateWithoutComplainTargetTypeInput;
}
