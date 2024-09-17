import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CommendableType } from '../commendable-type/commendable-type.model';
import { User } from '../user/user.model';
import { ComplaintTargetType } from '../complaint-target-type/complaint-target-type.model';

@ObjectType()
export class News {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    body!: string;

    @Field(() => Int, {nullable:false})
    likes!: number;

    @Field(() => Int, {nullable:false})
    views!: number;

    @Field(() => Boolean, {nullable:false})
    published!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Int, {nullable:false})
    commendableTypeId!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    complaintTargetId!: number;

    @Field(() => CommendableType, {nullable:false})
    commendableType?: CommendableType;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => ComplaintTargetType, {nullable:false})
    complainTargetType?: ComplaintTargetType;
}
