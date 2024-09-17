import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ContinueReadingWhereUniqueInput } from './continue-reading-where-unique.input';
import { Type } from 'class-transformer';
import { ContinueReadingUpdateWithoutUserInput } from './continue-reading-update-without-user.input';

@InputType()
export class ContinueReadingUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => ContinueReadingWhereUniqueInput, {nullable:false})
    @Type(() => ContinueReadingWhereUniqueInput)
    where!: Prisma.AtLeast<ContinueReadingWhereUniqueInput, 'id'>;

    @Field(() => ContinueReadingUpdateWithoutUserInput, {nullable:false})
    @Type(() => ContinueReadingUpdateWithoutUserInput)
    data!: ContinueReadingUpdateWithoutUserInput;
}
