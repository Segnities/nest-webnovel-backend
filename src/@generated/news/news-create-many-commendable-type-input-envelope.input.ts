import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NewsCreateManyCommendableTypeInput } from './news-create-many-commendable-type.input';
import { Type } from 'class-transformer';

@InputType()
export class NewsCreateManyCommendableTypeInputEnvelope {

    @Field(() => [NewsCreateManyCommendableTypeInput], {nullable:false})
    @Type(() => NewsCreateManyCommendableTypeInput)
    data!: Array<NewsCreateManyCommendableTypeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
