import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContinueReadingCreateManyInput } from './continue-reading-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyContinueReadingArgs {

    @Field(() => [ContinueReadingCreateManyInput], {nullable:false})
    @Type(() => ContinueReadingCreateManyInput)
    data!: Array<ContinueReadingCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
