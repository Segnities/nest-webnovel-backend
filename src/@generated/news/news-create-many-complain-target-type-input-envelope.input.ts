import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NewsCreateManyComplainTargetTypeInput } from './news-create-many-complain-target-type.input';
import { Type } from 'class-transformer';

@InputType()
export class NewsCreateManyComplainTargetTypeInputEnvelope {

    @Field(() => [NewsCreateManyComplainTargetTypeInput], {nullable:false})
    @Type(() => NewsCreateManyComplainTargetTypeInput)
    data!: Array<NewsCreateManyComplainTargetTypeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
