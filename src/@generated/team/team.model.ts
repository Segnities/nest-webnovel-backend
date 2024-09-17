import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { TeamCount } from './team-count.output';

@ObjectType()
export class Team {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false,defaultValue:0})
    chapters_count!: number;

    @Field(() => Int, {nullable:false,defaultValue:0})
    books_count!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [User], {nullable:true})
    users?: Array<User>;

    @Field(() => TeamCount, {nullable:false})
    _count?: TeamCount;
}
