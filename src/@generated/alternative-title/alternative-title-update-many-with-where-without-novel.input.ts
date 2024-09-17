import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlternativeTitleScalarWhereInput } from './alternative-title-scalar-where.input';
import { Type } from 'class-transformer';
import { AlternativeTitleUpdateManyMutationInput } from './alternative-title-update-many-mutation.input';

@InputType()
export class AlternativeTitleUpdateManyWithWhereWithoutNovelInput {

    @Field(() => AlternativeTitleScalarWhereInput, {nullable:false})
    @Type(() => AlternativeTitleScalarWhereInput)
    where!: AlternativeTitleScalarWhereInput;

    @Field(() => AlternativeTitleUpdateManyMutationInput, {nullable:false})
    @Type(() => AlternativeTitleUpdateManyMutationInput)
    data!: AlternativeTitleUpdateManyMutationInput;
}
