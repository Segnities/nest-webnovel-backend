import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';
import { Type } from 'class-transformer';
import { NovelCreateWithoutCommendableTypeInput } from './novel-create-without-commendable-type.input';

@InputType()
export class NovelCreateOrConnectWithoutCommendableTypeInput {

    @Field(() => NovelWhereUniqueInput, {nullable:false})
    @Type(() => NovelWhereUniqueInput)
    where!: Prisma.AtLeast<NovelWhereUniqueInput, 'id'>;

    @Field(() => NovelCreateWithoutCommendableTypeInput, {nullable:false})
    @Type(() => NovelCreateWithoutCommendableTypeInput)
    create!: NovelCreateWithoutCommendableTypeInput;
}
