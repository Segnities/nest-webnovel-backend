import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContentComplaintCreateManyResolvedByUserInput } from './content-complaint-create-many-resolved-by-user.input';
import { Type } from 'class-transformer';

@InputType()
export class ContentComplaintCreateManyResolvedByUserInputEnvelope {

    @Field(() => [ContentComplaintCreateManyResolvedByUserInput], {nullable:false})
    @Type(() => ContentComplaintCreateManyResolvedByUserInput)
    data!: Array<ContentComplaintCreateManyResolvedByUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
