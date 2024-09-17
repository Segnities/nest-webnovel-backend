import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ContinueReadingWhereUniqueInput } from './continue-reading-where-unique.input';
import { Type } from 'class-transformer';
import { ContinueReadingUpdateWithoutUserInput } from './continue-reading-update-without-user.input';
import { ContinueReadingCreateWithoutUserInput } from './continue-reading-create-without-user.input';

@InputType()
export class ContinueReadingUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => ContinueReadingWhereUniqueInput, {nullable:false})
    @Type(() => ContinueReadingWhereUniqueInput)
    where!: Prisma.AtLeast<ContinueReadingWhereUniqueInput, 'id'>;

    @Field(() => ContinueReadingUpdateWithoutUserInput, {nullable:false})
    @Type(() => ContinueReadingUpdateWithoutUserInput)
    update!: ContinueReadingUpdateWithoutUserInput;

    @Field(() => ContinueReadingCreateWithoutUserInput, {nullable:false})
    @Type(() => ContinueReadingCreateWithoutUserInput)
    create!: ContinueReadingCreateWithoutUserInput;
}
