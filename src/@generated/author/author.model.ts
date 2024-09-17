import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Novel } from '../novel/novel.model';
import { AuthorSubscription } from '../author-subscription/author-subscription.model';
import { Notification } from '../notification/notification.model';
import { AuthorCount } from './author-count.output';

@ObjectType()
export class Author {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    img!: string;

    @Field(() => [Novel], {nullable:true})
    novels?: Array<Novel>;

    @Field(() => [AuthorSubscription], {nullable:true})
    authorSubscription?: Array<AuthorSubscription>;

    @Field(() => [Notification], {nullable:true})
    notifications?: Array<Notification>;

    @Field(() => AuthorCount, {nullable:false})
    _count?: AuthorCount;
}
