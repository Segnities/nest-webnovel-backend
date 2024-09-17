import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class BanReasonWhereInput {

    @Field(() => [BanReasonWhereInput], {nullable:true})
    AND?: Array<BanReasonWhereInput>;

    @Field(() => [BanReasonWhereInput], {nullable:true})
    OR?: Array<BanReasonWhereInput>;

    @Field(() => [BanReasonWhereInput], {nullable:true})
    NOT?: Array<BanReasonWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;
}
