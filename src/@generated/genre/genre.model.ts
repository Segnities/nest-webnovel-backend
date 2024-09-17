import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Novel } from '../novel/novel.model';
import { GenreCount } from './genre-count.output';

@ObjectType()
export class Genre {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => [Novel], {nullable:true})
    novels?: Array<Novel>;

    @Field(() => GenreCount, {nullable:false})
    _count?: GenreCount;
}
