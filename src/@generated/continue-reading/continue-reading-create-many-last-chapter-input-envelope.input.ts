import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContinueReadingCreateManyLastChapterInput } from './continue-reading-create-many-last-chapter.input';
import { Type } from 'class-transformer';

@InputType()
export class ContinueReadingCreateManyLastChapterInputEnvelope {

    @Field(() => [ContinueReadingCreateManyLastChapterInput], {nullable:false})
    @Type(() => ContinueReadingCreateManyLastChapterInput)
    data!: Array<ContinueReadingCreateManyLastChapterInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
