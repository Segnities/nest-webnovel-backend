import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateManyComplainTargetTypeInput } from './review-create-many-complain-target-type.input';
import { Type } from 'class-transformer';

@InputType()
export class ReviewCreateManyComplainTargetTypeInputEnvelope {

    @Field(() => [ReviewCreateManyComplainTargetTypeInput], {nullable:false})
    @Type(() => ReviewCreateManyComplainTargetTypeInput)
    data!: Array<ReviewCreateManyComplainTargetTypeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
