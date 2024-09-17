import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { Type } from 'class-transformer';
import { CommentCreateWithoutNotificationsInput } from './comment-create-without-notifications.input';

@InputType()
export class CommentCreateOrConnectWithoutNotificationsInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

    @Field(() => CommentCreateWithoutNotificationsInput, {nullable:false})
    @Type(() => CommentCreateWithoutNotificationsInput)
    create!: CommentCreateWithoutNotificationsInput;
}
