import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserComplaint } from '../user-complaint/user-complaint.model';
import { ContentComplaint } from '../content-complaint/content-complaint.model';
import { User } from '../user/user.model';
import { ComplaintReasonCount } from './complaint-reason-count.output';

@ObjectType()
export class ComplaintReason {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Int, {nullable:true})
    userId!: number | null;

    @Field(() => [UserComplaint], {nullable:true})
    userComplaints?: Array<UserComplaint>;

    @Field(() => [ContentComplaint], {nullable:true})
    contentComplaints?: Array<ContentComplaint>;

    @Field(() => User, {nullable:true})
    User?: User | null;

    @Field(() => ComplaintReasonCount, {nullable:false})
    _count?: ComplaintReasonCount;
}
