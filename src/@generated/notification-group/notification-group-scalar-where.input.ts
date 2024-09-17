import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class NotificationGroupScalarWhereInput {

    @Field(() => [NotificationGroupScalarWhereInput], {nullable:true})
    AND?: Array<NotificationGroupScalarWhereInput>;

    @Field(() => [NotificationGroupScalarWhereInput], {nullable:true})
    OR?: Array<NotificationGroupScalarWhereInput>;

    @Field(() => [NotificationGroupScalarWhereInput], {nullable:true})
    NOT?: Array<NotificationGroupScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    isDefault?: BoolFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    parentGroupId?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
