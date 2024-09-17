import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutNotificationsInput } from './comment-create-without-notifications.input';
import { Type } from 'class-transformer';
import { CommentCreateOrConnectWithoutNotificationsInput } from './comment-create-or-connect-without-notifications.input';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class CommentCreateNestedOneWithoutNotificationsInput {

    @Field(() => CommentCreateWithoutNotificationsInput, {nullable:true})
    @Type(() => CommentCreateWithoutNotificationsInput)
    create?: CommentCreateWithoutNotificationsInput;

    @Field(() => CommentCreateOrConnectWithoutNotificationsInput, {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutNotificationsInput)
    connectOrCreate?: CommentCreateOrConnectWithoutNotificationsInput;

    @Field(() => CommentWhereUniqueInput, {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
}
