import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContentComplaintCreateManyComplaintReasonInput } from './content-complaint-create-many-complaint-reason.input';
import { Type } from 'class-transformer';

@InputType()
export class ContentComplaintCreateManyComplaintReasonInputEnvelope {

    @Field(() => [ContentComplaintCreateManyComplaintReasonInput], {nullable:false})
    @Type(() => ContentComplaintCreateManyComplaintReasonInput)
    data!: Array<ContentComplaintCreateManyComplaintReasonInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
