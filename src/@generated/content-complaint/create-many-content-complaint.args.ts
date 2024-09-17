import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContentComplaintCreateManyInput } from './content-complaint-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyContentComplaintArgs {

    @Field(() => [ContentComplaintCreateManyInput], {nullable:false})
    @Type(() => ContentComplaintCreateManyInput)
    data!: Array<ContentComplaintCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
