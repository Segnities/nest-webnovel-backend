import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { Type } from 'class-transformer';
import { CommentCreateWithoutCommendableTypeInput } from './comment-create-without-commendable-type.input';

@InputType()
export class CommentCreateOrConnectWithoutCommendableTypeInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

    @Field(() => CommentCreateWithoutCommendableTypeInput, {nullable:false})
    @Type(() => CommentCreateWithoutCommendableTypeInput)
    create!: CommentCreateWithoutCommendableTypeInput;
}
