import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BanReasonWhereInput } from './ban-reason-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyBanReasonArgs {

    @Field(() => BanReasonWhereInput, {nullable:true})
    @Type(() => BanReasonWhereInput)
    where?: BanReasonWhereInput;
}
