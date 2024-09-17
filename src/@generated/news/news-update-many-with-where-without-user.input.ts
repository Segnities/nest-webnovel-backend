import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NewsScalarWhereInput } from './news-scalar-where.input';
import { Type } from 'class-transformer';
import { NewsUpdateManyMutationInput } from './news-update-many-mutation.input';

@InputType()
export class NewsUpdateManyWithWhereWithoutUserInput {

    @Field(() => NewsScalarWhereInput, {nullable:false})
    @Type(() => NewsScalarWhereInput)
    where!: NewsScalarWhereInput;

    @Field(() => NewsUpdateManyMutationInput, {nullable:false})
    @Type(() => NewsUpdateManyMutationInput)
    data!: NewsUpdateManyMutationInput;
}
