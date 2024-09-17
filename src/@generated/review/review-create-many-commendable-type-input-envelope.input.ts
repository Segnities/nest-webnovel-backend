import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateManyCommendableTypeInput } from './review-create-many-commendable-type.input';
import { Type } from 'class-transformer';

@InputType()
export class ReviewCreateManyCommendableTypeInputEnvelope {

    @Field(() => [ReviewCreateManyCommendableTypeInput], {nullable:false})
    @Type(() => ReviewCreateManyCommendableTypeInput)
    data!: Array<ReviewCreateManyCommendableTypeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
