import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContinueReadingWhereInput } from './continue-reading-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyContinueReadingArgs {

    @Field(() => ContinueReadingWhereInput, {nullable:true})
    @Type(() => ContinueReadingWhereInput)
    where?: ContinueReadingWhereInput;
}
