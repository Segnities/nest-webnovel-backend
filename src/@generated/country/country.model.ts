import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Novel } from '../novel/novel.model';
import { CountryCount } from './country-count.output';

@ObjectType()
export class Country {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => [Novel], {nullable:true})
    novels?: Array<Novel>;

    @Field(() => CountryCount, {nullable:false})
    _count?: CountryCount;
}
