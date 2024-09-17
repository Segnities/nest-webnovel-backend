import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppealCreateInput } from './appeal-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAppealArgs {

    @Field(() => AppealCreateInput, {nullable:false})
    @Type(() => AppealCreateInput)
    data!: AppealCreateInput;
}
