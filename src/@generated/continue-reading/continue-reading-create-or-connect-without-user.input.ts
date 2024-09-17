import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ContinueReadingWhereUniqueInput } from './continue-reading-where-unique.input';
import { Type } from 'class-transformer';
import { ContinueReadingCreateWithoutUserInput } from './continue-reading-create-without-user.input';

@InputType()
export class ContinueReadingCreateOrConnectWithoutUserInput {

    @Field(() => ContinueReadingWhereUniqueInput, {nullable:false})
    @Type(() => ContinueReadingWhereUniqueInput)
    where!: Prisma.AtLeast<ContinueReadingWhereUniqueInput, 'id'>;

    @Field(() => ContinueReadingCreateWithoutUserInput, {nullable:false})
    @Type(() => ContinueReadingCreateWithoutUserInput)
    create!: ContinueReadingCreateWithoutUserInput;
}
