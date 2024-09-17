import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
/* import { User } from '../../user/model/user.model';
import { CommendableType } from '../../commendable-type/model/commendable-type.model';
import { ComplaintTargetType } from '../../complaint-target-type/model/complaint-target-type.model';
import { Notification } from '../../notification/model/notification.model'; */

export enum CommentStatus {
  ACTIVE = 'ACTIVE',
  DELETED = 'DELETED',
  HIDDEN_BY_MODERATOR = 'HIDDEN_BY_MODERATOR',
  HIDDEN = 'HIDDEN',
}

registerEnumType(CommentStatus, {
  name: 'CommentStatus',
  description: 'Статуси коментарів',
});

@ObjectType()
export class Comment {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  userId: number;

  /*   @Field(() => User)
  user: User; */

  @Field(() => Int, { nullable: true })
  nestedLevel?: number;

  @Field()
  body: string;

  @Field(() => Int)
  likes: number;

  @Field(() => Int)
  dislikes: number;

  @Field(() => CommentStatus)
  status: CommentStatus;

  @Field(() => Int)
  commendableTypeId: number;

  /*   @Field(() => CommendableType)
  commendableType: CommendableType; */

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => Int)
  complaintTypeId: number;

  @Field(() => Int, { nullable: true })
  replyToId?: number;

  @Field(() => Int)
  complaintTargetId: number;
  /* 
  @Field(() => ComplaintTargetType)
  complainTargetType: ComplaintTargetType; */

  @Field(() => Comment, { nullable: true })
  replyTo?: Comment;

  @Field(() => [Comment])
  replies: Comment[];

  /*   @Field(() => [Notification])
  notifications: Notification[]; */
}
