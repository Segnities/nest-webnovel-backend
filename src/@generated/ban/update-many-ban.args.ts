import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BanUpdateManyMutationInput } from './ban-update-many-mutation.input';
import { Type } from 'class-transformer';
import { BanWhereInput } from './ban-where.input';

@ArgsType()
export class UpdateManyBanArgs {

    @Field(() => BanUpdateManyMutationInput, {nullable:false})
    @Type(() => BanUpdateManyMutationInput)
    data!: BanUpdateManyMutationInput;

    @Field(() => BanWhereInput, {nullable:true})
    @Type(() => BanWhereInput)
    where?: BanWhereInput;
}
