import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Novel } from '../novel/novel.model';
import { TagCount } from './tag-count.output';

@ObjectType()
export class Tag {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => [Novel], {nullable:true})
    novels?: Array<Novel>;

    @Field(() => TagCount, {nullable:false})
    _count?: TagCount;
}
