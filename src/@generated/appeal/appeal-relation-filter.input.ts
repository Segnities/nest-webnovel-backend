import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppealWhereInput } from './appeal-where.input';

@InputType()
export class AppealRelationFilter {

    @Field(() => AppealWhereInput, {nullable:true})
    is?: AppealWhereInput;

    @Field(() => AppealWhereInput, {nullable:true})
    isNot?: AppealWhereInput;
}
