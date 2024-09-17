import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AlternativeTitleCreateInput } from './alternative-title-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAlternativeTitleArgs {

    @Field(() => AlternativeTitleCreateInput, {nullable:false})
    @Type(() => AlternativeTitleCreateInput)
    data!: AlternativeTitleCreateInput;
}
