import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContentComplaintCreateManyComplaintTargetTypeInput } from './content-complaint-create-many-complaint-target-type.input';
import { Type } from 'class-transformer';

@InputType()
export class ContentComplaintCreateManyComplaintTargetTypeInputEnvelope {

    @Field(() => [ContentComplaintCreateManyComplaintTargetTypeInput], {nullable:false})
    @Type(() => ContentComplaintCreateManyComplaintTargetTypeInput)
    data!: Array<ContentComplaintCreateManyComplaintTargetTypeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
