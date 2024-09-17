import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommendableTypeWhereInput } from './commendable-type-where.input';

@InputType()
export class CommendableTypeRelationFilter {

    @Field(() => CommendableTypeWhereInput, {nullable:true})
    is?: CommendableTypeWhereInput;

    @Field(() => CommendableTypeWhereInput, {nullable:true})
    isNot?: CommendableTypeWhereInput;
}
