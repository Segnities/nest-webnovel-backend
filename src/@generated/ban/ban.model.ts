import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Appeal } from '../appeal/appeal.model';
import { User } from '../user/user.model';
import { ComplaintTargetType } from '../complaint-target-type/complaint-target-type.model';

@ObjectType()
export class Ban {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    banStart!: Date;

    @Field(() => Date, {nullable:false})
    banEnd!: Date;

    @Field(() => Int, {nullable:false})
    duration!: number;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    appealed!: boolean;

    @Field(() => Int, {nullable:false})
    appealId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Int, {nullable:false})
    issuedBy!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    complaintTargetId!: number;

    @Field(() => Appeal, {nullable:false})
    appeal?: Appeal;

    @Field(() => User, {nullable:false})
    issuedByUser?: User;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => ComplaintTargetType, {nullable:false})
    complaintTargetType?: ComplaintTargetType;
}
