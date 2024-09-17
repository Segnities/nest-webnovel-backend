import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppelaReasonCreateManyInput } from './appela-reason-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAppelaReasonArgs {

    @Field(() => [AppelaReasonCreateManyInput], {nullable:false})
    @Type(() => AppelaReasonCreateManyInput)
    data!: Array<AppelaReasonCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
