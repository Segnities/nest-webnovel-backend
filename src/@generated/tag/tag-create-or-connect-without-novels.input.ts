import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { Type } from 'class-transformer';
import { TagCreateWithoutNovelsInput } from './tag-create-without-novels.input';

@InputType()
export class TagCreateOrConnectWithoutNovelsInput {

    @Field(() => TagWhereUniqueInput, {nullable:false})
    @Type(() => TagWhereUniqueInput)
    where!: Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'title'>;

    @Field(() => TagCreateWithoutNovelsInput, {nullable:false})
    @Type(() => TagCreateWithoutNovelsInput)
    create!: TagCreateWithoutNovelsInput;
}
