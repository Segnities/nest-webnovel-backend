import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';

@InputType()
export class ContinueReadingScalarWhereInput {

    @Field(() => [ContinueReadingScalarWhereInput], {nullable:true})
    AND?: Array<ContinueReadingScalarWhereInput>;

    @Field(() => [ContinueReadingScalarWhereInput], {nullable:true})
    OR?: Array<ContinueReadingScalarWhereInput>;

    @Field(() => [ContinueReadingScalarWhereInput], {nullable:true})
    NOT?: Array<ContinueReadingScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => FloatFilter, {nullable:true})
    progressPercentage?: FloatFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    lastChapterId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    novelId?: IntFilter;
}
