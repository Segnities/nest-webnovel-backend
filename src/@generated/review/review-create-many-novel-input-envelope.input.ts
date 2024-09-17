import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateManyNovelInput } from './review-create-many-novel.input';
import { Type } from 'class-transformer';

@InputType()
export class ReviewCreateManyNovelInputEnvelope {

    @Field(() => [ReviewCreateManyNovelInput], {nullable:false})
    @Type(() => ReviewCreateManyNovelInput)
    data!: Array<ReviewCreateManyNovelInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
