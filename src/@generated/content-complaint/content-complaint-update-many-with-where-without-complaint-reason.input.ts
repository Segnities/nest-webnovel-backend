import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContentComplaintScalarWhereInput } from './content-complaint-scalar-where.input';
import { Type } from 'class-transformer';
import { ContentComplaintUpdateManyMutationInput } from './content-complaint-update-many-mutation.input';

@InputType()
export class ContentComplaintUpdateManyWithWhereWithoutComplaintReasonInput {

    @Field(() => ContentComplaintScalarWhereInput, {nullable:false})
    @Type(() => ContentComplaintScalarWhereInput)
    where!: ContentComplaintScalarWhereInput;

    @Field(() => ContentComplaintUpdateManyMutationInput, {nullable:false})
    @Type(() => ContentComplaintUpdateManyMutationInput)
    data!: ContentComplaintUpdateManyMutationInput;
}
