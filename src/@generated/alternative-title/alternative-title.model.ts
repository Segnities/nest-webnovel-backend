import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Novel } from '../novel/novel.model';

@ObjectType()
export class AlternativeTitle {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Int, {nullable:false})
    novelId!: number;

    @Field(() => Novel, {nullable:false})
    novel?: Novel;
}
