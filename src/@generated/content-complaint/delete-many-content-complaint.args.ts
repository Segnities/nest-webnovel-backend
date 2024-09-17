import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContentComplaintWhereInput } from './content-complaint-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyContentComplaintArgs {

    @Field(() => ContentComplaintWhereInput, {nullable:true})
    @Type(() => ContentComplaintWhereInput)
    where?: ContentComplaintWhereInput;
}
