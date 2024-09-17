import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChapterCreateManyComplainTargetTypeInput } from './chapter-create-many-complain-target-type.input';
import { Type } from 'class-transformer';

@InputType()
export class ChapterCreateManyComplainTargetTypeInputEnvelope {

    @Field(() => [ChapterCreateManyComplainTargetTypeInput], {nullable:false})
    @Type(() => ChapterCreateManyComplainTargetTypeInput)
    data!: Array<ChapterCreateManyComplainTargetTypeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
