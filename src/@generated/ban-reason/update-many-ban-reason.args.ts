import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BanReasonUpdateManyMutationInput } from './ban-reason-update-many-mutation.input';
import { Type } from 'class-transformer';
import { BanReasonWhereInput } from './ban-reason-where.input';

@ArgsType()
export class UpdateManyBanReasonArgs {

    @Field(() => BanReasonUpdateManyMutationInput, {nullable:false})
    @Type(() => BanReasonUpdateManyMutationInput)
    data!: BanReasonUpdateManyMutationInput;

    @Field(() => BanReasonWhereInput, {nullable:true})
    @Type(() => BanReasonWhereInput)
    where?: BanReasonWhereInput;
}
