import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { AppealListRelationFilter } from '../appeal/appeal-list-relation-filter.input';

@InputType()
export class AppelaReasonWhereInput {

    @Field(() => [AppelaReasonWhereInput], {nullable:true})
    AND?: Array<AppelaReasonWhereInput>;

    @Field(() => [AppelaReasonWhereInput], {nullable:true})
    OR?: Array<AppelaReasonWhereInput>;

    @Field(() => [AppelaReasonWhereInput], {nullable:true})
    NOT?: Array<AppelaReasonWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => AppealListRelationFilter, {nullable:true})
    appeals?: AppealListRelationFilter;
}
