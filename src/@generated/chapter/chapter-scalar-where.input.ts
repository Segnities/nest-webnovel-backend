import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ChapterScalarWhereInput {

    @Field(() => [ChapterScalarWhereInput], {nullable:true})
    AND?: Array<ChapterScalarWhereInput>;

    @Field(() => [ChapterScalarWhereInput], {nullable:true})
    OR?: Array<ChapterScalarWhereInput>;

    @Field(() => [ChapterScalarWhereInput], {nullable:true})
    NOT?: Array<ChapterScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    content?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    likes?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    novelId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    commendableTypeId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    complaitTypeId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    complaintTargetId?: IntFilter;
}
