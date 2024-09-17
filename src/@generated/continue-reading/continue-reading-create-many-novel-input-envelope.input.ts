import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContinueReadingCreateManyNovelInput } from './continue-reading-create-many-novel.input';
import { Type } from 'class-transformer';

@InputType()
export class ContinueReadingCreateManyNovelInputEnvelope {

    @Field(() => [ContinueReadingCreateManyNovelInput], {nullable:false})
    @Type(() => ContinueReadingCreateManyNovelInput)
    data!: Array<ContinueReadingCreateManyNovelInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
