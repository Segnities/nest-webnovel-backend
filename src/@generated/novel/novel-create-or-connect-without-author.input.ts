import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';
import { Type } from 'class-transformer';
import { NovelCreateWithoutAuthorInput } from './novel-create-without-author.input';

@InputType()
export class NovelCreateOrConnectWithoutAuthorInput {

    @Field(() => NovelWhereUniqueInput, {nullable:false})
    @Type(() => NovelWhereUniqueInput)
    where!: Prisma.AtLeast<NovelWhereUniqueInput, 'id'>;

    @Field(() => NovelCreateWithoutAuthorInput, {nullable:false})
    @Type(() => NovelCreateWithoutAuthorInput)
    create!: NovelCreateWithoutAuthorInput;
}
