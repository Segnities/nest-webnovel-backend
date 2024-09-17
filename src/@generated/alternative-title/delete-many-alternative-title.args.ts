import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AlternativeTitleWhereInput } from './alternative-title-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyAlternativeTitleArgs {

    @Field(() => AlternativeTitleWhereInput, {nullable:true})
    @Type(() => AlternativeTitleWhereInput)
    where?: AlternativeTitleWhereInput;
}
