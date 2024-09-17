import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ComplaintCategoryCount {

    @Field(() => Int, {nullable:false})
    complaintTargetTypes?: number;
}
