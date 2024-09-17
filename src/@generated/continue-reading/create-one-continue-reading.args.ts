import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContinueReadingCreateInput } from './continue-reading-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneContinueReadingArgs {

    @Field(() => ContinueReadingCreateInput, {nullable:false})
    @Type(() => ContinueReadingCreateInput)
    data!: ContinueReadingCreateInput;
}
