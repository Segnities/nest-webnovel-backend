import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelCreateManyComplainTargetTypeInput } from './novel-create-many-complain-target-type.input';
import { Type } from 'class-transformer';

@InputType()
export class NovelCreateManyComplainTargetTypeInputEnvelope {

    @Field(() => [NovelCreateManyComplainTargetTypeInput], {nullable:false})
    @Type(() => NovelCreateManyComplainTargetTypeInput)
    data!: Array<NovelCreateManyComplainTargetTypeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
