import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BanWhereInput } from './ban-where.input';

@InputType()
export class BanListRelationFilter {

    @Field(() => BanWhereInput, {nullable:true})
    every?: BanWhereInput;

    @Field(() => BanWhereInput, {nullable:true})
    some?: BanWhereInput;

    @Field(() => BanWhereInput, {nullable:true})
    none?: BanWhereInput;
}
