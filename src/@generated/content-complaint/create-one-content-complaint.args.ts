import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContentComplaintCreateInput } from './content-complaint-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneContentComplaintArgs {

    @Field(() => ContentComplaintCreateInput, {nullable:false})
    @Type(() => ContentComplaintCreateInput)
    data!: ContentComplaintCreateInput;
}
