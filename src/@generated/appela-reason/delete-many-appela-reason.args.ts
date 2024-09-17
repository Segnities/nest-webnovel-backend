import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppelaReasonWhereInput } from './appela-reason-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyAppelaReasonArgs {

    @Field(() => AppelaReasonWhereInput, {nullable:true})
    @Type(() => AppelaReasonWhereInput)
    where?: AppelaReasonWhereInput;
}
