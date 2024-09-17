import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class NovelAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    releaseYear?: number;

    @Field(() => Float, {nullable:true})
    views?: number;

    @Field(() => Float, {nullable:true})
    countryId?: number;

    @Field(() => Float, {nullable:true})
    authorId?: number;

    @Field(() => Float, {nullable:true})
    commendableTypeId?: number;

    @Field(() => Float, {nullable:true})
    complaintTargetId?: number;
}
