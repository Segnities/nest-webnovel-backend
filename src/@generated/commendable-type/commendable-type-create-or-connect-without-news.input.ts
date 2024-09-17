import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommendableTypeWhereUniqueInput } from './commendable-type-where-unique.input';
import { Type } from 'class-transformer';
import { CommendableTypeCreateWithoutNewsInput } from './commendable-type-create-without-news.input';

@InputType()
export class CommendableTypeCreateOrConnectWithoutNewsInput {

    @Field(() => CommendableTypeWhereUniqueInput, {nullable:false})
    @Type(() => CommendableTypeWhereUniqueInput)
    where!: Prisma.AtLeast<CommendableTypeWhereUniqueInput, 'id'>;

    @Field(() => CommendableTypeCreateWithoutNewsInput, {nullable:false})
    @Type(() => CommendableTypeCreateWithoutNewsInput)
    create!: CommendableTypeCreateWithoutNewsInput;
}
