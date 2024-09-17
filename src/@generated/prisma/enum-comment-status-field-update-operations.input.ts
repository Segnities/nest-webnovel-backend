import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentStatus } from './comment-status.enum';

@InputType()
export class EnumCommentStatusFieldUpdateOperationsInput {

    @Field(() => CommentStatus, {nullable:true})
    set?: keyof typeof CommentStatus;
}
