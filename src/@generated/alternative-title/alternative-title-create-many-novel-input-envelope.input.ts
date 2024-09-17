import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlternativeTitleCreateManyNovelInput } from './alternative-title-create-many-novel.input';
import { Type } from 'class-transformer';

@InputType()
export class AlternativeTitleCreateManyNovelInputEnvelope {

    @Field(() => [AlternativeTitleCreateManyNovelInput], {nullable:false})
    @Type(() => AlternativeTitleCreateManyNovelInput)
    data!: Array<AlternativeTitleCreateManyNovelInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
