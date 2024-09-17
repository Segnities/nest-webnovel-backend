import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppelaReasonWhereInput } from './appela-reason-where.input';
import { Type } from 'class-transformer';
import { AppelaReasonUpdateWithoutAppealsInput } from './appela-reason-update-without-appeals.input';

@InputType()
export class AppelaReasonUpdateToOneWithWhereWithoutAppealsInput {

    @Field(() => AppelaReasonWhereInput, {nullable:true})
    @Type(() => AppelaReasonWhereInput)
    where?: AppelaReasonWhereInput;

    @Field(() => AppelaReasonUpdateWithoutAppealsInput, {nullable:false})
    @Type(() => AppelaReasonUpdateWithoutAppealsInput)
    data!: AppelaReasonUpdateWithoutAppealsInput;
}
