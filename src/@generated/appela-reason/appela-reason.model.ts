import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Appeal } from '../appeal/appeal.model';
import { AppelaReasonCount } from './appela-reason-count.output';

@ObjectType()
export class AppelaReason {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => [Appeal], {nullable:true})
    appeals?: Array<Appeal>;

    @Field(() => AppelaReasonCount, {nullable:false})
    _count?: AppelaReasonCount;
}
