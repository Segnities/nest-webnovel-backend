import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BanCreateInput } from './ban-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneBanArgs {

    @Field(() => BanCreateInput, {nullable:false})
    @Type(() => BanCreateInput)
    data!: BanCreateInput;
}
