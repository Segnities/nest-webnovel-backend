import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContentComplaintUpdateManyMutationInput } from './content-complaint-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ContentComplaintWhereInput } from './content-complaint-where.input';

@ArgsType()
export class UpdateManyContentComplaintArgs {

    @Field(() => ContentComplaintUpdateManyMutationInput, {nullable:false})
    @Type(() => ContentComplaintUpdateManyMutationInput)
    data!: ContentComplaintUpdateManyMutationInput;

    @Field(() => ContentComplaintWhereInput, {nullable:true})
    @Type(() => ContentComplaintWhereInput)
    where?: ContentComplaintWhereInput;
}
