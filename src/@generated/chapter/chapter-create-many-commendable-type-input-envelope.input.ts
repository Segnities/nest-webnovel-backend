import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChapterCreateManyCommendableTypeInput } from './chapter-create-many-commendable-type.input';
import { Type } from 'class-transformer';

@InputType()
export class ChapterCreateManyCommendableTypeInputEnvelope {

    @Field(() => [ChapterCreateManyCommendableTypeInput], {nullable:false})
    @Type(() => ChapterCreateManyCommendableTypeInput)
    data!: Array<ChapterCreateManyCommendableTypeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
