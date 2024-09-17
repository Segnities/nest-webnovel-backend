import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BanReasonCreateManyInput } from './ban-reason-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyBanReasonArgs {

    @Field(() => [BanReasonCreateManyInput], {nullable:false})
    @Type(() => BanReasonCreateManyInput)
    data!: Array<BanReasonCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
