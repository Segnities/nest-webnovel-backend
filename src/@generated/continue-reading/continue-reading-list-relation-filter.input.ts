import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContinueReadingWhereInput } from './continue-reading-where.input';

@InputType()
export class ContinueReadingListRelationFilter {

    @Field(() => ContinueReadingWhereInput, {nullable:true})
    every?: ContinueReadingWhereInput;

    @Field(() => ContinueReadingWhereInput, {nullable:true})
    some?: ContinueReadingWhereInput;

    @Field(() => ContinueReadingWhereInput, {nullable:true})
    none?: ContinueReadingWhereInput;
}
