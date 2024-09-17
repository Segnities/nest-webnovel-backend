import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppealCreateManyAppealInput } from './appeal-create-many-appeal.input';
import { Type } from 'class-transformer';

@InputType()
export class AppealCreateManyAppealInputEnvelope {

    @Field(() => [AppealCreateManyAppealInput], {nullable:false})
    @Type(() => AppealCreateManyAppealInput)
    data!: Array<AppealCreateManyAppealInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
