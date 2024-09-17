import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NovelCreateManyInput } from './novel-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyNovelArgs {

    @Field(() => [NovelCreateManyInput], {nullable:false})
    @Type(() => NovelCreateManyInput)
    data!: Array<NovelCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
