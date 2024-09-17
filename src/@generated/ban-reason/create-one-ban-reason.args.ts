import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BanReasonCreateInput } from './ban-reason-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneBanReasonArgs {

    @Field(() => BanReasonCreateInput, {nullable:false})
    @Type(() => BanReasonCreateInput)
    data!: BanReasonCreateInput;
}
