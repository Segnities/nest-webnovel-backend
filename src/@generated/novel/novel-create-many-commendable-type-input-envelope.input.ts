import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelCreateManyCommendableTypeInput } from './novel-create-many-commendable-type.input';
import { Type } from 'class-transformer';

@InputType()
export class NovelCreateManyCommendableTypeInputEnvelope {

    @Field(() => [NovelCreateManyCommendableTypeInput], {nullable:false})
    @Type(() => NovelCreateManyCommendableTypeInput)
    data!: Array<NovelCreateManyCommendableTypeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
