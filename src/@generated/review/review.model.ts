import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Novel } from '../novel/novel.model';
import { CommendableType } from '../commendable-type/commendable-type.model';
import { ComplaintTargetType } from '../complaint-target-type/complaint-target-type.model';
import { Notification } from '../notification/notification.model';
import { ReviewCount } from './review-count.output';

@ObjectType()
export class Review {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    body!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Int, {nullable:false})
    likes!: number;

    @Field(() => Int, {nullable:false})
    views!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    novelId!: number;

    @Field(() => Int, {nullable:false})
    commendableTypeId!: number;

    @Field(() => Int, {nullable:false})
    complaintTargetId!: number;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Novel, {nullable:false})
    novel?: Novel;

    @Field(() => CommendableType, {nullable:false})
    commendableType?: CommendableType;

    @Field(() => ComplaintTargetType, {nullable:false})
    complainTargetType?: ComplaintTargetType;

    @Field(() => [Notification], {nullable:true})
    notifications?: Array<Notification>;

    @Field(() => ReviewCount, {nullable:false})
    _count?: ReviewCount;
}
