import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppealScalarWhereInput } from './appeal-scalar-where.input';
import { Type } from 'class-transformer';
import { AppealUpdateManyMutationInput } from './appeal-update-many-mutation.input';

@InputType()
export class AppealUpdateManyWithWhereWithoutReviewedByUserInput {

    @Field(() => AppealScalarWhereInput, {nullable:false})
    @Type(() => AppealScalarWhereInput)
    where!: AppealScalarWhereInput;

    @Field(() => AppealUpdateManyMutationInput, {nullable:false})
    @Type(() => AppealUpdateManyMutationInput)
    data!: AppealUpdateManyMutationInput;
}
