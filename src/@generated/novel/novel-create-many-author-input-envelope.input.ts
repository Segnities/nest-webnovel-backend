import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelCreateManyAuthorInput } from './novel-create-many-author.input';
import { Type } from 'class-transformer';

@InputType()
export class NovelCreateManyAuthorInputEnvelope {

    @Field(() => [NovelCreateManyAuthorInput], {nullable:false})
    @Type(() => NovelCreateManyAuthorInput)
    data!: Array<NovelCreateManyAuthorInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
