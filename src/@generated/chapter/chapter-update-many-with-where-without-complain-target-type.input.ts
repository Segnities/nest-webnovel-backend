import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChapterScalarWhereInput } from './chapter-scalar-where.input';
import { Type } from 'class-transformer';
import { ChapterUpdateManyMutationInput } from './chapter-update-many-mutation.input';

@InputType()
export class ChapterUpdateManyWithWhereWithoutComplainTargetTypeInput {

    @Field(() => ChapterScalarWhereInput, {nullable:false})
    @Type(() => ChapterScalarWhereInput)
    where!: ChapterScalarWhereInput;

    @Field(() => ChapterUpdateManyMutationInput, {nullable:false})
    @Type(() => ChapterUpdateManyMutationInput)
    data!: ChapterUpdateManyMutationInput;
}
