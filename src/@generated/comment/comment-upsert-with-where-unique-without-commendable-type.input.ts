import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { Type } from 'class-transformer';
import { CommentUpdateWithoutCommendableTypeInput } from './comment-update-without-commendable-type.input';
import { CommentCreateWithoutCommendableTypeInput } from './comment-create-without-commendable-type.input';

@InputType()
export class CommentUpsertWithWhereUniqueWithoutCommendableTypeInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

    @Field(() => CommentUpdateWithoutCommendableTypeInput, {nullable:false})
    @Type(() => CommentUpdateWithoutCommendableTypeInput)
    update!: CommentUpdateWithoutCommendableTypeInput;

    @Field(() => CommentCreateWithoutCommendableTypeInput, {nullable:false})
    @Type(() => CommentCreateWithoutCommendableTypeInput)
    create!: CommentCreateWithoutCommendableTypeInput;
}
