import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AlternativeTitleCreateManyInput } from './alternative-title-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAlternativeTitleArgs {

    @Field(() => [AlternativeTitleCreateManyInput], {nullable:false})
    @Type(() => AlternativeTitleCreateManyInput)
    data!: Array<AlternativeTitleCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
