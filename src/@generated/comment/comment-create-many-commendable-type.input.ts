import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CommentStatus } from '../prisma/comment-status.enum';

@InputType()
export class CommentCreateManyCommendableTypeInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:true})
    nestedLevel?: number;

    @Field(() => String, {nullable:false})
    body!: string;

    @Field(() => Int, {nullable:true})
    likes?: number;

    @Field(() => Int, {nullable:true})
    dislikes?: number;

    @Field(() => CommentStatus, {nullable:false})
    status!: keyof typeof CommentStatus;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:false})
    complaintTypeId!: number;

    @Field(() => Int, {nullable:true})
    replyToId?: number;

    @Field(() => Int, {nullable:false})
    complaintTargetId!: number;
}
