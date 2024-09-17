import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContentComplaintWhereInput } from './content-complaint-where.input';

@InputType()
export class ContentComplaintListRelationFilter {

    @Field(() => ContentComplaintWhereInput, {nullable:true})
    every?: ContentComplaintWhereInput;

    @Field(() => ContentComplaintWhereInput, {nullable:true})
    some?: ContentComplaintWhereInput;

    @Field(() => ContentComplaintWhereInput, {nullable:true})
    none?: ContentComplaintWhereInput;
}
