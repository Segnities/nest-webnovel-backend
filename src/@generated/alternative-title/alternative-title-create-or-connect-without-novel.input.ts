import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AlternativeTitleWhereUniqueInput } from './alternative-title-where-unique.input';
import { Type } from 'class-transformer';
import { AlternativeTitleCreateWithoutNovelInput } from './alternative-title-create-without-novel.input';

@InputType()
export class AlternativeTitleCreateOrConnectWithoutNovelInput {

    @Field(() => AlternativeTitleWhereUniqueInput, {nullable:false})
    @Type(() => AlternativeTitleWhereUniqueInput)
    where!: Prisma.AtLeast<AlternativeTitleWhereUniqueInput, 'id'>;

    @Field(() => AlternativeTitleCreateWithoutNovelInput, {nullable:false})
    @Type(() => AlternativeTitleCreateWithoutNovelInput)
    create!: AlternativeTitleCreateWithoutNovelInput;
}
