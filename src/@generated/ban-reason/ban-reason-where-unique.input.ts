import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BanReasonWhereInput } from './ban-reason-where.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class BanReasonWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [BanReasonWhereInput], {nullable:true})
    AND?: Array<BanReasonWhereInput>;

    @Field(() => [BanReasonWhereInput], {nullable:true})
    OR?: Array<BanReasonWhereInput>;

    @Field(() => [BanReasonWhereInput], {nullable:true})
    NOT?: Array<BanReasonWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;
}
