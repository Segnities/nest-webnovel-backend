import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppealWhereInput } from './appeal-where.input';

@InputType()
export class AppealListRelationFilter {

    @Field(() => AppealWhereInput, {nullable:true})
    every?: AppealWhereInput;

    @Field(() => AppealWhereInput, {nullable:true})
    some?: AppealWhereInput;

    @Field(() => AppealWhereInput, {nullable:true})
    none?: AppealWhereInput;
}
