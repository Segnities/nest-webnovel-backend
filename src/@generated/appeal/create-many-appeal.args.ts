import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppealCreateManyInput } from './appeal-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAppealArgs {

    @Field(() => [AppealCreateManyInput], {nullable:false})
    @Type(() => AppealCreateManyInput)
    data!: Array<AppealCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
