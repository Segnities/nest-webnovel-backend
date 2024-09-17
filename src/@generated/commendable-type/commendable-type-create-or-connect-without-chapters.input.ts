import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommendableTypeWhereUniqueInput } from './commendable-type-where-unique.input';
import { Type } from 'class-transformer';
import { CommendableTypeCreateWithoutChaptersInput } from './commendable-type-create-without-chapters.input';

@InputType()
export class CommendableTypeCreateOrConnectWithoutChaptersInput {

    @Field(() => CommendableTypeWhereUniqueInput, {nullable:false})
    @Type(() => CommendableTypeWhereUniqueInput)
    where!: Prisma.AtLeast<CommendableTypeWhereUniqueInput, 'id'>;

    @Field(() => CommendableTypeCreateWithoutChaptersInput, {nullable:false})
    @Type(() => CommendableTypeCreateWithoutChaptersInput)
    create!: CommendableTypeCreateWithoutChaptersInput;
}
