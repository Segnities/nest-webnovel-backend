import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommendableTypeWhereUniqueInput } from './commendable-type-where-unique.input';
import { Type } from 'class-transformer';
import { CommendableTypeCreateWithoutCommentsInput } from './commendable-type-create-without-comments.input';

@InputType()
export class CommendableTypeCreateOrConnectWithoutCommentsInput {

    @Field(() => CommendableTypeWhereUniqueInput, {nullable:false})
    @Type(() => CommendableTypeWhereUniqueInput)
    where!: Prisma.AtLeast<CommendableTypeWhereUniqueInput, 'id'>;

    @Field(() => CommendableTypeCreateWithoutCommentsInput, {nullable:false})
    @Type(() => CommendableTypeCreateWithoutCommentsInput)
    create!: CommendableTypeCreateWithoutCommentsInput;
}
