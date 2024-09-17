import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutNotificationsInput } from './comment-create-without-notifications.input';
import { Type } from 'class-transformer';
import { CommentCreateOrConnectWithoutNotificationsInput } from './comment-create-or-connect-without-notifications.input';
import { CommentUpsertWithoutNotificationsInput } from './comment-upsert-without-notifications.input';
import { CommentWhereInput } from './comment-where.input';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateToOneWithWhereWithoutNotificationsInput } from './comment-update-to-one-with-where-without-notifications.input';

@InputType()
export class CommentUpdateOneWithoutNotificationsNestedInput {

    @Field(() => CommentCreateWithoutNotificationsInput, {nullable:true})
    @Type(() => CommentCreateWithoutNotificationsInput)
    create?: CommentCreateWithoutNotificationsInput;

    @Field(() => CommentCreateOrConnectWithoutNotificationsInput, {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutNotificationsInput)
    connectOrCreate?: CommentCreateOrConnectWithoutNotificationsInput;

    @Field(() => CommentUpsertWithoutNotificationsInput, {nullable:true})
    @Type(() => CommentUpsertWithoutNotificationsInput)
    upsert?: CommentUpsertWithoutNotificationsInput;

    @Field(() => CommentWhereInput, {nullable:true})
    @Type(() => CommentWhereInput)
    disconnect?: CommentWhereInput;

    @Field(() => CommentWhereInput, {nullable:true})
    @Type(() => CommentWhereInput)
    delete?: CommentWhereInput;

    @Field(() => CommentWhereUniqueInput, {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

    @Field(() => CommentUpdateToOneWithWhereWithoutNotificationsInput, {nullable:true})
    @Type(() => CommentUpdateToOneWithWhereWithoutNotificationsInput)
    update?: CommentUpdateToOneWithWhereWithoutNotificationsInput;
}
