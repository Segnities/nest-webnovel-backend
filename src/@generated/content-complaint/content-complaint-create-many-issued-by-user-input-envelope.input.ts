import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContentComplaintCreateManyIssuedByUserInput } from './content-complaint-create-many-issued-by-user.input';
import { Type } from 'class-transformer';

@InputType()
export class ContentComplaintCreateManyIssuedByUserInputEnvelope {

    @Field(() => [ContentComplaintCreateManyIssuedByUserInput], {nullable:false})
    @Type(() => ContentComplaintCreateManyIssuedByUserInput)
    data!: Array<ContentComplaintCreateManyIssuedByUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
