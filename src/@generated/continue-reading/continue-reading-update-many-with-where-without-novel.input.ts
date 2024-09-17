import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContinueReadingScalarWhereInput } from './continue-reading-scalar-where.input';
import { Type } from 'class-transformer';
import { ContinueReadingUpdateManyMutationInput } from './continue-reading-update-many-mutation.input';

@InputType()
export class ContinueReadingUpdateManyWithWhereWithoutNovelInput {

    @Field(() => ContinueReadingScalarWhereInput, {nullable:false})
    @Type(() => ContinueReadingScalarWhereInput)
    where!: ContinueReadingScalarWhereInput;

    @Field(() => ContinueReadingUpdateManyMutationInput, {nullable:false})
    @Type(() => ContinueReadingUpdateManyMutationInput)
    data!: ContinueReadingUpdateManyMutationInput;
}
