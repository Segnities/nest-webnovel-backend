import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class NovelCollectionMappingAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    novelId?: true;

    @Field(() => Boolean, {nullable:true})
    userCollectionId?: true;
}
