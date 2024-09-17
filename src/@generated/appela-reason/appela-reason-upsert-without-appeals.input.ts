import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppelaReasonUpdateWithoutAppealsInput } from './appela-reason-update-without-appeals.input';
import { Type } from 'class-transformer';
import { AppelaReasonCreateWithoutAppealsInput } from './appela-reason-create-without-appeals.input';
import { AppelaReasonWhereInput } from './appela-reason-where.input';

@InputType()
export class AppelaReasonUpsertWithoutAppealsInput {

    @Field(() => AppelaReasonUpdateWithoutAppealsInput, {nullable:false})
    @Type(() => AppelaReasonUpdateWithoutAppealsInput)
    update!: AppelaReasonUpdateWithoutAppealsInput;

    @Field(() => AppelaReasonCreateWithoutAppealsInput, {nullable:false})
    @Type(() => AppelaReasonCreateWithoutAppealsInput)
    create!: AppelaReasonCreateWithoutAppealsInput;

    @Field(() => AppelaReasonWhereInput, {nullable:true})
    @Type(() => AppelaReasonWhereInput)
    where?: AppelaReasonWhereInput;
}
