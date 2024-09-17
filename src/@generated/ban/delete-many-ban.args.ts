import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BanWhereInput } from './ban-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyBanArgs {

    @Field(() => BanWhereInput, {nullable:true})
    @Type(() => BanWhereInput)
    where?: BanWhereInput;
}
