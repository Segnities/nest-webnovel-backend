import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppealCreateManyReviewedByUserInput } from './appeal-create-many-reviewed-by-user.input';
import { Type } from 'class-transformer';

@InputType()
export class AppealCreateManyReviewedByUserInputEnvelope {

    @Field(() => [AppealCreateManyReviewedByUserInput], {nullable:false})
    @Type(() => AppealCreateManyReviewedByUserInput)
    data!: Array<AppealCreateManyReviewedByUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
