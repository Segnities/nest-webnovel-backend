import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { Type } from 'class-transformer';
import { CommentUpdateWithoutComplainTargetTypeInput } from './comment-update-without-complain-target-type.input';

@InputType()
export class CommentUpdateWithWhereUniqueWithoutComplainTargetTypeInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

    @Field(() => CommentUpdateWithoutComplainTargetTypeInput, {nullable:false})
    @Type(() => CommentUpdateWithoutComplainTargetTypeInput)
    data!: CommentUpdateWithoutComplainTargetTypeInput;
}
