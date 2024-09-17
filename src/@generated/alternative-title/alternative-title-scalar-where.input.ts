import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class AlternativeTitleScalarWhereInput {

    @Field(() => [AlternativeTitleScalarWhereInput], {nullable:true})
    AND?: Array<AlternativeTitleScalarWhereInput>;

    @Field(() => [AlternativeTitleScalarWhereInput], {nullable:true})
    OR?: Array<AlternativeTitleScalarWhereInput>;

    @Field(() => [AlternativeTitleScalarWhereInput], {nullable:true})
    NOT?: Array<AlternativeTitleScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    novelId?: IntFilter;
}
