import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChapterCreateManyNovelInput } from './chapter-create-many-novel.input';
import { Type } from 'class-transformer';

@InputType()
export class ChapterCreateManyNovelInputEnvelope {

    @Field(() => [ChapterCreateManyNovelInput], {nullable:false})
    @Type(() => ChapterCreateManyNovelInput)
    data!: Array<ChapterCreateManyNovelInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
