import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelScalarWhereInput } from './novel-scalar-where.input';
import { Type } from 'class-transformer';
import { NovelUpdateManyMutationInput } from './novel-update-many-mutation.input';

@InputType()
export class NovelUpdateManyWithWhereWithoutTagsInput {

    @Field(() => NovelScalarWhereInput, {nullable:false})
    @Type(() => NovelScalarWhereInput)
    where!: NovelScalarWhereInput;

    @Field(() => NovelUpdateManyMutationInput, {nullable:false})
    @Type(() => NovelUpdateManyMutationInput)
    data!: NovelUpdateManyMutationInput;
}
